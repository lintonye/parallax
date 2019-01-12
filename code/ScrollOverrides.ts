import { Data, animate, Animatable, transform } from "framer";

function validateSOParams(params) {
  //TODO
}

function toNegativeRange(positiveRange) {
  // return [-positiveRange[1], -positiveRange[0]];
  return positiveRange.map(n => -n);
}

function isInRange(v: number, range: [number, number]) {
  const min = Math.min(range[0], range[1]);
  const max = Math.max(range[0], range[1]);
  return min <= v && v <= max;
}

const wrapFuncsWithRangeCheck = (overrides, inRange) => {
  const result = {};
  for (let key in overrides) {
    const value = overrides[key];
    let newValue = value;
    if (typeof value === "function") {
      newValue = args => (inRange ? value(args) : undefined);
    }
    result[key] = newValue;
  }
  return result;
};

function processOneOperation(operation, scrollRange, result) {
  const { id, op } = operation;
  const { scroll: oldScroll } = result;
  let inRange = false;
  result.scroll = props => {
    let opOnMove,
      restOverrides = {};
    if (typeof op === "function") opOnMove = op;
    else {
      const { onMove, ...rest } = op.$$$scroll(scrollRange)(props);
      opOnMove = onMove;
      restOverrides = rest;
    }

    return mergeOverrides(
      {
        ...wrapFuncsWithRangeCheck(restOverrides, inRange),
        onMove(scrollProps) {
          inRange = isInRange(scrollProps.y, scrollRange);
          if (inRange) {
            opOnMove && opOnMove(scrollProps);
          }
        }
      },
      oldScroll && oldScroll(props)
    );
  };
  if (typeof op === "object") {
    const layerOp = op.$$$layer(scrollRange);
    if (typeof layerOp === "function") {
      const oldIdValue = result[id];
      result[id] = props => {
        return mergeOverrides(
          // TODO should we wrap this with RangeCheck?
          wrapFuncsWithRangeCheck(layerOp(props), inRange),
          oldIdValue && oldIdValue(props)
        );
      };
    } else {
      throw `layerOp isn't a function! ${layerOp}`;
    }
  }
}

interface ScrollOverrides {
  scroll: (props: object) => { onMove };
  [key: string]: (props: object) => object;
}

export function scrollOverrides(...params): ScrollOverrides {
  validateSOParams(params);
  const result = { scroll: undefined };
  for (let i = 0; i < params.length; i += 2) {
    const scrollRange = toNegativeRange(params[i]);
    const operations = params[i + 1];
    operations.forEach(operation => {
      processOneOperation(operation, scrollRange, result);
    });
  }
  return result;
}

export function modulate(propName, outputRange, dataValue?) {
  // TODO validate outputRange
  const data = Data({ value: Animatable(0) });
  const dvalue = dataValue || data.value;
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
}

export function stickyScrollY(...stickyTopRanges) {
  const data = Data({ top: Animatable(0) });
  let initialTop = 0;
  const scrollOverrides = props => ({
    onMove({ y }) {
      const inRange = ([min, max], v) => min <= v && v <= max;
      stickyTopRanges.forEach(range => {
        if (inRange(range, Math.abs(y))) {
          data.top.set(-y);
        }
      });
    }
  });
  const layerOverrides = ({ top }) => {
    data.top.set(top);
    initialTop = top;
    return {
      top: data.top
    };
  };
  return [scrollOverrides, layerOverrides];
}

export function scrollAwayHeader_old() {
  const data = Data({ headerTop: Animatable(0) });

  let isAnimating = false;

  async function setHeaderTop(top) {
    if (!isAnimating) {
      isAnimating = true;
      await animate.ease(data.headerTop, top, { duration: 0.1 }).finished;
      isAnimating = false;
    }
  }

  let headerHeight = 0;

  const scrollOverrides = props => {
    let lastY, vy, lastTimestamp;
    //TODO this is a bad way to determine the scroll height
    const scrollMax =
      props.children[0].props.children[0].props.height - props.height;
    return {
      onMove({ y }) {
        if (typeof lastY !== "undefined") {
          vy = (y - lastY) / (Date.now() - lastTimestamp);
        }
        lastY = y;
        lastTimestamp = Date.now();
        // console.log("vy", vy, "scrollMax", scrollMax);

        if (vy > 0 && y > -scrollMax) {
          setHeaderTop(0);
        } else if (vy < 0 && y <= -headerHeight) {
          setHeaderTop(-headerHeight);
        }
      }
    };
  };

  const layerOverrides = props => {
    headerHeight = props.height;
    return {
      top: data.headerTop
    };
  };
  return [scrollOverrides, layerOverrides];
}

// export function scrollAwayHeader(headerHeight, scrollMax) {
//   const data = Data({ headerTop: Animatable(0) });
//   let isAnimating = false;

//   async function setHeaderTop(top) {
//     if (!isAnimating) {
//       isAnimating = true;
//       await animate.ease(data.headerTop, top, { duration: 0.1 }).finished;
//       isAnimating = false;
//     }
//   }

//   const overrides = scrollOverrides(
//     [headerHeight, scrollMax],
//     [
//       {
//         op: ({ vy, y }) => {
//           if (vy > 0 && y > -scrollMax) {
//             setHeaderTop(0);
//           } else if (vy < 0 && y <= -headerHeight) {
//             setHeaderTop(-headerHeight);
//           }
//         }
//       }
//     ]
//   );
//   return [overrides.scroll, overrides.header];
// }

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
