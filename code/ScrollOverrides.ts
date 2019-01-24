import { Data, animate, Animatable, transform } from "framer";

type OnMove = (params: { y: number; vy: number }) => any;

type ScrollOverrides = {
  scroll: (props: object) => { onMove: OnMove; [key: string]: any };
  [key: string]: (props: object) => { [key: string]: any };
};

type Override = { [key: string]: any };

type Range = [number, number];

type Operation = {
  id: string | [string];
  op: Override | [Override] | (() => any);
};

const isArray = a => a instanceof Array;

function validateSOParams(params) {
  const throwError = e => {
    throw `${e}

      Usage examples:

        const overrides = scrollOverrides(
          [0, 20],
          [
            { id: 'title', op: modulate('opacity', [0, 1]) }
          ]
        );

        const overrides = scrollOverrides(
          [0, 20],
          [
            { id: 'title', op: stickyY() }
          ],
          [20, 40],
          [
            { id: 'name', op: stickyY() },
            { id: 'contact', op: modulate('opacity', [0, 1]) }
          ]
        );

        const overrides = scrollOverrides(
          [0, 20],
          [
            { id: ['title', 'name'], op: stickyY() }
          ],
          [20, 40],
          [
            { id: 'contact', op: [ stickyY(), modulate('opacity', [0, 1]) ] }
          ],
        );
  `;
  };
  if (params.length === 0 || params.length % 2 !== 0) {
    throwError(`The number of parameters must be even and greater than 0.`);
  }
  for (let i = 0; i < params.length; i += 2) {
    const range = params[i];
    if (!isFinite(range[0]) || !isFinite(range[1]) || range[0] > range[1]) {
      throwError(`Parameter ${JSON.stringify(range)} is not a range.`);
    }
    const operations = params[i + 1];
    if (!isArray(operations) || operations.length <= 0) {
      throwError(
        `Parameter ${JSON.stringify(operations)} is not a non-empty array.`
      );
    }
    for (let j = 0; j < operations.length; j++) {
      const { id, op } = operations[j];
      if (typeof op !== "function" && !isArray(op)) {
        throwError(`No valid op found in ${JSON.stringify(operations[j])}`);
      }
    }
  }
}

function toNegativeRange(positiveRange) {
  // return [-positiveRange[1], -positiveRange[0]];
  return positiveRange.map(n => -n);
}

function isInRange(v: number, range: Range) {
  const min = Math.min(range[0], range[1]);
  const max = Math.max(range[0], range[1]);
  return min <= v && v <= max;
}

const DATA_STORE: Map<string, any> = new Map();
function getDataFromStore(itemId: string, propName: string, defaultValue?) {
  const key = itemId + "." + propName;
  let justCreated = false;
  let d = DATA_STORE.get(key);
  if (typeof d === "undefined") {
    d = Animatable(defaultValue);
    DATA_STORE.set(key, d);
    justCreated = true;
  }
  return [justCreated, d];
}

const getOpType = op =>
  typeof op("$$$dummyId") === "function" ? "onMoveOnly" : "scrollAndLayer";

const ONMOVE_CALLED_MAP = new Map();
function processOneOperation(id: string, op, scrollRange: Range, result) {
  const { scroll: oldScroll } = result;
  let inRange = false;
  const wrapFuncsWithRangeCheck = overrides => {
    const os = {};
    for (let key in overrides) {
      const value = overrides[key];
      let newValue = value;
      if (typeof value === "function") {
        newValue = args => (inRange ? value(args) : undefined);
      }
      os[key] = newValue;
    }
    return os;
  };

  const opType = getOpType(op);
  result.scroll = props => {
    let opOnMove,
      restOverrides = {};
    if (opType === "onMoveOnly") opOnMove = op(id);
    else {
      const { onMove, ...rest } = op(id).$$$scroll(scrollRange)(props);
      opOnMove = onMove;
      restOverrides = rest;
    }
    let lastY, lastTimeStamp;
    return mergeOverrides(
      {
        ...wrapFuncsWithRangeCheck(restOverrides),
        onMove(scrollProps) {
          const { y } = scrollProps;
          let vy = 0;
          if (typeof lastY !== "undefined")
            vy = -(y - lastY) / (Date.now() - lastTimeStamp);
          if (vy === 0) vy = 1; //TODO is this correct?
          lastTimeStamp = Date.now();
          lastY = y;
          inRange = isInRange(y, scrollRange);
          if (inRange) {
            const vyInMap = ONMOVE_CALLED_MAP.get(opOnMove);
            const didntRunInThisDirection =
              typeof vyInMap === "undefined" ||
              Math.sign(vyInMap) !== Math.sign(vy);

            // opType === "onMoveOnly" &&
            //   console.log(
            //     "vyInMap",
            //     vyInMap,
            //     "opOnMove",
            //     opOnMove,
            //     "didntRunInThisDirection",
            //     didntRunInThisDirection
            //   );

            if (
              opOnMove &&
              (didntRunInThisDirection || opType === "scrollAndLayer")
            ) {
              opOnMove({ ...scrollProps, vy });
              ONMOVE_CALLED_MAP.set(opOnMove, vy);
            }
          }
        }
      },
      oldScroll && oldScroll(props)
    );
  };

  const opWithId = op(id); // THIS IS A MUST!
  if (opType === "scrollAndLayer" && typeof opWithId.$$$layer === "function") {
    const layerOp = opWithId.$$$layer(scrollRange);
    if (typeof layerOp === "function") {
      const oldIdValue = result[id];
      result[id] = props => {
        return mergeOverrides(
          wrapFuncsWithRangeCheck(layerOp(props)),
          oldIdValue && oldIdValue(props)
        );
      };
    } else {
      throw `layerOp isn't a function! ${layerOp}`;
    }
  }
}

export function scrollOverrides(...params): ScrollOverrides {
  validateSOParams(params);
  const result = { scroll: undefined };
  for (let i = 0; i < params.length; i += 2) {
    const scrollRange = toNegativeRange(params[i]);
    const operations: [Operation] = params[i + 1];
    operations.forEach(operation => {
      const { id, op } = operation;
      const ids = (isArray(id) ? id : [id]) as [string];
      const ops = isArray(op) ? op : [op];
      ids.forEach(i =>
        ops.forEach(o => processOneOperation(i, o, scrollRange, result))
      );
    });
  }
  return result;
}

export const modulate = (propName, outputRange, dataValue?) => itemId => {
  // TODO validate outputRange
  const dvalue =
    dataValue ||
    getDataFromStore(itemId, propName, Animatable(outputRange[0]))[1];
  return {
    $$$scroll: ([first, second]) => props => ({
      onMove({ y }) {
        const output = transform(
          [{ y: first }, { y: second }],
          [{ [propName]: outputRange[0] }, { [propName]: outputRange[1] }],
          { limit: true }
        )({ y });
        // console.log(
        //   "onMove in modulate",
        //   "outputRange",
        //   outputRange,
        //   "y",
        //   y,
        //   "min",
        //   first,
        //   "max",
        //   second,
        //   "output",
        //   output
        // );
        dvalue.set(output[propName]);
      }
    }),
    $$$layer: range => props => ({
      [propName]: dvalue
    })
  };
};

export const speedY = (ratio: number, dataValue?) => itemId => {
  let justCreated = false;
  let dtop = dataValue;
  if (typeof dataValue === "undefined") {
    const [created, dstore] = getDataFromStore(itemId, "top", 0);
    justCreated = created;
    dtop = dstore;
  }

  let initialTop = undefined;
  return {
    $$$scroll: range => props => ({
      onMove({ y }) {
        if (!justCreated && typeof initialTop === "undefined") {
          initialTop = dtop.get();
        }
        dtop.set((y - range[0]) * ratio + initialTop);
      }
    }),
    $$$layer: range => props => {
      // console.log("initialTop", initialTop);
      if (justCreated) initialTop = props.top;
      dtop.set(initialTop);
      return {
        top: dtop
      };
    }
  };
};

export const stickyY = (dataValue?) => speedY(-1, dataValue);

// export const stickyY = (dataValue?) => itemId => {
// let justCreated = false;
// let dtop = dataValue;
// if (typeof dataValue === "undefined") {
//   const [created, dstore] = getDataFromStore(itemId, "top", 0);
//   justCreated = created;
//   dtop = dstore;
// }
// let initialTop = defaultTop;
// return {
//   $$$scroll: range => props => ({
//     onMove({ y }) {
//       if (!justCreated && typeof initialTop === "undefined")
//         initialTop = dtop.get();
//       dtop.set(range[0] - y + initialTop);
//     }
//   }),
//   $$$layer: range => props => {
//     if (justCreated) initialTop = props.top;
//     dtop.set(initialTop);
//     return {
//       top: dtop
//     };
//   }
// };
// };

export const snapY = () => itemId => {
  const [_, contentOffsetY] = getDataFromStore(
    "$$$scroll",
    "contentOffsetY",
    0
  );
  let currentY = 0;
  const snapIt = range => {
    const mid = Math.abs((range[1] - range[0]) / 2);
    // console.log("currentY", currentY, "mid", mid, "range", range);

    if (Math.abs(currentY - range[0]) < mid) {
      animate.ease(contentOffsetY, range[0], { duration: 0.2 });
    } else {
      animate.ease(contentOffsetY, range[1], { duration: 0.2 });
    }
  };
  return {
    $$$scroll: range => props => ({
      onMove({ y }) {
        currentY = y;
      },
      onMouseWheelEnd() {
        snapIt(range);
      },
      onMouseUp() {
        snapIt(range);
      },
      contentOffsetY
    })
  };
};

// export function stickyScrollY(...stickyTopRanges) {
//   const data = Data({ top: Animatable(0) });
//   let initialTop = 0;
//   const scrollOverrides = props => ({
//     onMove({ y }) {
//       const inRange = ([min, max], v) => min <= v && v <= max;
//       stickyTopRanges.forEach(range => {
//         if (inRange(range, Math.abs(y))) {
//           data.top.set(-y);
//         }
//       });
//     }
//   });
//   const layerOverrides = ({ top }) => {
//     data.top.set(top);
//     initialTop = top;
//     return {
//       top: data.top
//     };
//   };
//   return [scrollOverrides, layerOverrides];
// }

// export function scrollAwayHeader_old() {
//   const data = Data({ headerTop: Animatable(0) });

//   let isAnimating = false;

//   async function setHeaderTop(top) {
//     if (!isAnimating) {
//       isAnimating = true;
//       await animate.ease(data.headerTop, top, { duration: 0.1 }).finished;
//       isAnimating = false;
//     }
//   }

//   let headerHeight = 0;

//   const scrollOverrides = props => {
//     let lastY, vy, lastTimestamp;
//     //TODO this is a bad way to determine the scroll height
//     const scrollMax =
//       props.children[0].props.children[0].props.height - props.height;
//     return {
//       onMove({ y }) {
//         if (typeof lastY !== "undefined") {
//           vy = (y - lastY) / (Date.now() - lastTimestamp);
//         }
//         lastY = y;
//         lastTimestamp = Date.now();
//         // console.log("vy", vy, "scrollMax", scrollMax);

//         if (vy > 0 && y > -scrollMax) {
//           setHeaderTop(0);
//         } else if (vy < 0 && y <= -headerHeight) {
//           setHeaderTop(-headerHeight);
//         }
//       }
//     };
//   };

//   const layerOverrides = props => {
//     headerHeight = props.height;
//     return {
//       top: data.headerTop
//     };
//   };
//   return [scrollOverrides, layerOverrides];
// }

export function scrollAwayHeader(headerHeight: number, scrollMax: number) {
  const data = Data({ headerTop: Animatable(0) });
  let isAnimating = false;

  async function setHeaderTop(top) {
    if (!isAnimating) {
      isAnimating = true;
      await animate.ease(data.headerTop, top, { duration: 0.1 }).finished;
      isAnimating = false;
    }
  }

  const overrides = scrollOverrides(
    [headerHeight, scrollMax],
    [
      {
        op: itemId => ({ vy, y }) => {
          if (vy < 0 && y > -scrollMax) {
            setHeaderTop(0);
          } else if (vy > 0 && y <= -headerHeight) {
            setHeaderTop(-headerHeight);
          }
        }
      }
    ]
  );
  const headerOverride = props => {
    return { top: data.headerTop };
  };
  return [overrides.scroll, headerOverride];
}

export function mergeOverrides(...overrides) {
  return overrides.reduce((merged, o) => {
    if (typeof o === "object") {
      for (let key in o) {
        const valueInMerged = merged[key];
        if (typeof valueInMerged === "undefined") {
          merged[key] = o[key];
        } else if (typeof valueInMerged === "function") {
          if (typeof o[key] === "function") {
            merged[key] = args => {
              valueInMerged(args);
              o[key](args);
            };
          } else {
            console.error(
              `Incompatible types (key=${key})`,
              valueInMerged,
              o[key]
            );
            throw `Incompatible types (key=${key})`;
          }
        } else {
          console.log(
            `Key already appeared (key=${key}), using existing value`,
            valueInMerged,
            "New value dropped",
            o[key]
          );
        }
      }
    }
    return merged;
  }, {});
}
