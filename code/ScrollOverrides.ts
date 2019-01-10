import { Data, animate, Animatable } from "framer";

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

export function mergeOverrides(...overrides) {
  return overrides.reduce((merged, o) => {
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
    return merged;
  }, {});
}
