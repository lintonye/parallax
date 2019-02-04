import { Data, animate, Animatable, transform } from "framer";

type OnMove = (params: { y: number; vy?: number }) => any;

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

const isOpObject = operation => typeof operation.op !== "undefined";

function validateSOParams(params) {
  const throwError = e => {
    throw `${e}

      Usage examples:

        const overrides = scrollOverrides(
          [0, 20],
          { id: 'title', op: modulate('opacity', [0, 1]) }
        );

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
    if (
      !(isArray(operations) && operations.length > 0) &&
      !isOpObject(operations)
    ) {
      throwError(
        `Parameter ${JSON.stringify(
          operations
        )} is not a non-empty array or object.`
      );
    }
    const ops = isOpObject(operations) ? [operations] : operations;
    for (let j = 0; j < ops.length; j++) {
      const { id, op } = ops[j];
      if (typeof op !== "function" && !isArray(op)) {
        throwError(`No valid op found in ${JSON.stringify(ops[j])}`);
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

const getOpType = op =>
  typeof op(() => [true, Animatable(0)]) === "function"
    ? "onMoveOnly"
    : "scrollAndLayer";

function getScrollDirection(props) {
  if (typeof props.children === "undefined") {
    return "vertical"; //this is called from test code
  }
  const scrollElement = props.children[0];
  const { direction } = scrollElement.props;
  if (["vertical", "horizontal"].indexOf(direction) >= 0) return direction;
  else
    throw `Invalid direction "${direction}", only "horizontal" and "vertical" is supported!`;
}

function processOneOperation(
  id: string,
  getDataFromStore,
  op,
  scrollRange: Range,
  result
) {
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
  // These three variables must be declared here, otherwise an op
  // function would be called more than once when it's setting data
  // in its function body. When a data item is changed, the
  // "result.scroll" function will be called again.
  let lastXorY,
    lastTimeStamp,
    lastVxOrY = -1;
  result.scroll = props => {
    let opOnMove,
      restOverrides = {};
    const scrollDirection = getScrollDirection(props);
    if (opType === "onMoveOnly") opOnMove = op(getDataFromStore);
    else {
      const { onMove, onMoveOut, ...rest } = op(getDataFromStore).$$$scroll(
        scrollRange,
        scrollDirection
      )(props);
      opOnMove = onMove;
      restOverrides = rest;
    }
    return mergeOverrides(
      {
        ...wrapFuncsWithRangeCheck(restOverrides),
        onMove(scrollProps) {
          const { x, y } = scrollProps;
          const xOrY = scrollDirection === "horizontal" ? x : y;
          let v = 1;
          if (typeof lastXorY !== "undefined")
            v = -(xOrY - lastXorY) / (Date.now() - lastTimeStamp);
          lastTimeStamp = Date.now();
          lastXorY = xOrY;
          inRange = isInRange(xOrY, scrollRange);
          if (inRange) {
            const didntRunInThisDirection =
              Math.sign(lastVxOrY) !== Math.sign(v);
            if (
              opOnMove &&
              (didntRunInThisDirection || opType === "scrollAndLayer")
            ) {
              const runAtNextRound = opOnMove({
                ...scrollProps,
                vx: scrollDirection === "horizontal" ? v : 0,
                vy: scrollDirection === "vertical" ? v : 0,
                scrollDirection
              });
              lastVxOrY = v;
              if (runAtNextRound) lastVxOrY = 0;
            }
          }
        }
      },
      oldScroll && oldScroll(props)
    );
  };

  const opWithId = op(getDataFromStore); // THIS IS A MUST!
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

type GetDataFromStoreFun = (
  propName: string,
  defaultValue?,
  itemIdOverride?: string
) => [boolean, Animatable<any>];

function createDataStoreFun(itemId: string): GetDataFromStoreFun {
  const dataStore: Map<string, any> = new Map();
  return function(propName: string, defaultValue?, itemIdOverride?: string) {
    const key = itemIdOverride || itemId + "." + propName;
    let justCreated = false;
    let d = dataStore.get(key);
    if (typeof d === "undefined") {
      d = Animatable(defaultValue);
      dataStore.set(key, d);
      justCreated = true;
    }
    return [justCreated, d];
  };
}

export function scrollOverrides(...params): ScrollOverrides {
  validateSOParams(params);
  const result = { scroll: undefined };
  const dataStoreFuns: Map<String, GetDataFromStoreFun> = new Map();
  const getDataStoreFun = id => {
    let fun = dataStoreFuns.get(id);
    if (typeof fun === "undefined") {
      fun = createDataStoreFun(id);
      dataStoreFuns.set(id, fun);
    }
    return fun;
  };
  for (let i = 0; i < params.length; i += 2) {
    const scrollRange = toNegativeRange(params[i]);
    const paramsI1 = params[i + 1];
    const operations: [Operation] = isArray(paramsI1) ? paramsI1 : [paramsI1];
    operations.forEach(operation => {
      const { id, op } = operation;
      const ids = (isArray(id) ? id : [id]) as [string];
      const ops = isArray(op) ? op : [op];
      ids.forEach(i =>
        ops.forEach(o =>
          processOneOperation(i, getDataStoreFun(i), o, scrollRange, result)
        )
      );
    });
  }
  return result;
}

export const modulate = (
  propName,
  outputRange,
  dataValue?
) => getDataFromStore => {
  // TODO validate outputRange
  const dvalue =
    dataValue || getDataFromStore(propName, Animatable(outputRange[0]))[1];
  return {
    $$$scroll: ([first, second]) => props => ({
      onMove({ x, y, scrollDirection }) {
        const xOrY = scrollDirection === "horizontal" ? x : y;
        const output = transform(
          [{ xOrY: first }, { xOrY: second }],
          [{ [propName]: outputRange[0] }, { [propName]: outputRange[1] }],
          { limit: true }
        )({ xOrY });
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

function getTopLeft(props) {
  const {
    left,
    right,
    top,
    bottom,
    width,
    height,
    parentSize,
    centerX,
    centerY
  } = props;
  const getValue = (v: number | Animatable<number>) =>
    typeof v === "number" ? v : v.get();
  const percentToNumber = (percent: string) =>
    Number.parseFloat(percent.slice(0, percent.length - 1)) / 100;
  const actualLeft =
    left !== null
      ? left
      : right !== null
      ? getValue(parentSize.width) - width - right
      : getValue(parentSize.width) * percentToNumber(centerX) - width / 2;
  const actualTop =
    top !== null
      ? top
      : bottom !== null
      ? getValue(parentSize.height) - height - bottom
      : getValue(parentSize.height) * percentToNumber(centerY) - height / 2;
  return { left: actualLeft, top: actualTop };
}

export const speed = (
  ratio: number,
  data = { left: null, top: null },
  direction = "auto"
) => getDataFromStore => {
  const d = { ...data };
  const justCreated = { left: null, top: null };
  if (d.left === null) {
    const [created, left] = getDataFromStore("left", 0);
    justCreated.left = created;
    d.left = left;
  }
  if (d.top === null) {
    const [created, top] = getDataFromStore("top", 0);
    justCreated.top = created;
    d.top = top;
  }

  let initialPos = { left: null, top: null };
  return {
    $$$scroll: range => props => ({
      onMove({ x, y, scrollDirection }) {
        if (!justCreated.left && initialPos.left === null) {
          initialPos.left = d.left.get();
        }
        if (!justCreated.top && initialPos.top === null) {
          initialPos.top = d.top.get();
        }

        scrollDirection === "horizontal" &&
          d.left.set((x - range[0]) * ratio + initialPos.left);
        scrollDirection === "vertical" &&
          d.top.set((y - range[0]) * ratio + initialPos.top);
      }
    }),
    $$$layer: range => props => {
      // console.log("initialTop", initialTop);
      const pos = getTopLeft(props);
      if (justCreated.left) initialPos.left = pos.left;
      if (justCreated.top) initialPos.top = pos.top;
      d.left.set(initialPos.left);
      d.top.set(initialPos.top);
      return {
        top: d.top,
        bottom: null,
        left: d.left,
        right: null
      };
    }
  };
};

export const speedY = (ratio, data?) => speed(ratio, data, "y");

export const stickyY = (data?) => speedY(-1, data);

export const sticky = (data?) => speed(-1, data);

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

export const snap = () => getDataFromStore => {
  const [_, contentOffsetY] = getDataFromStore(
    "contentOffsetY",
    0,
    "$$$scroll"
  );
  const [__, contentOffsetX] = getDataFromStore(
    "contentOffsetX",
    0,
    "$$$scroll"
  );
  let currentXorY = 0;
  const snapIt = (range, scrollDirection) => {
    const contentOffsetXorY =
      scrollDirection === "horizontal" ? contentOffsetX : contentOffsetY;
    const mid = Math.abs((range[1] - range[0]) / 2);
    if (Math.abs(currentXorY - range[0]) < mid) {
      animate.ease(contentOffsetXorY, range[0], { duration: 0.2 });
    } else {
      animate.ease(contentOffsetXorY, range[1], { duration: 0.2 });
    }
  };
  return {
    $$$scroll: (range, scrollDirection) => props => {
      const contentOffsetOverride =
        scrollDirection === "horizontal"
          ? { contentOffsetX }
          : { contentOffsetY };
      return {
        onMove({ x, y }) {
          currentXorY = scrollDirection === "horizontal" ? x : y;
        },
        onMouseWheelEnd() {
          snapIt(range, scrollDirection);
        },
        onMouseUp() {
          snapIt(range, scrollDirection);
        },
        ...contentOffsetOverride
      };
    }
  };
};

export const snapY = snap;

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
        op: getDataFromStore => ({ vy, y }) => {
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
