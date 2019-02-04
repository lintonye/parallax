import { Data, animate, Override, Animatable } from "framer";
import { scrollOverrides, modulate, speedY, stickyY } from "./Parallax";

const data = Data({ traceProgress: 0 });

const overrides = scrollOverrides(
  // [0, 800],
  // [{ id: ["svg", "iPadImg"], op: stickyY(200) }],
  [0, 200],
  [
    {
      op: itemId => ({ y }) => {
        data.traceProgress = Math.floor((Math.abs(y) / 200) * 100);
        return true;
      }
    }
  ],
  [200, 300],
  [{ id: "iPadImg", op: modulate("opacity", [0, 1]) }]
);

export const Scroll: Override = props => overrides.scroll(props);
export const Svg: Override = props => ({
  // ...overrides.svg(props),
  progress: data.traceProgress
});
export const iPadImg: Override = props => overrides.iPadImg(props);
