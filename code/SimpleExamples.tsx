import { Data, animate, Override, Animatable } from "framer";
import { scrollOverrides, modulate, speedY, stickyY } from "./Parallax";

const data = Data({ rotation: Animatable(0) });

const overrides = scrollOverrides(
  [100, 200],
  [{ id: "sticky100200", op: stickyY() }],
  //   [300, 400],
  //   [{ id: "sticky100200", op: modulate("opacity", [1, 0]) }],
  [0, 1000],
  [
    { id: "speed0", op: speedY(0) },
    { id: "speed05", op: speedY(0.5) },
    { id: "speedminus1", op: speedY(-1) },
    { id: "speedminus2", op: speedY(-2) },
    { id: "speed1", op: speedY(1) },
    { id: "opacity", op: modulate("opacity", [1, 0]) },
    { id: "bg", op: modulate("background", ["red", "black"]) }
  ],
  [600, 650],
  [
    {
      // This function will only be executed once per direction when
      // the scrolling position falls into the range specified above.
      // i.e. scrolling down, it'll be called, but if keep scrolling down,
      // it won't be called anymore. But if scrolling up at this point,
      // it'll be called again.
      //
      // Don't forget the "itemId =>" in the front!
      op: itemId => ({ vy }) => {
        // vy: the velocity of scrolling in y direction
        //   vy > 0: scrolling down
        //   vy < 0: scrolling up
        animate.spring(data.rotation, vy > 0 ? 180 : 0);
      }
    }
  ]
);

export const Scroll: Override = props => overrides.scroll(props);
export const Sticky100200: Override = props => overrides.sticky100200(props);
export const Speed0: Override = props => overrides.speed0(props);
export const Speed05: Override = props => overrides.speed05(props);
export const Speedminus1: Override = props => overrides.speedminus1(props);
export const Speedminus2: Override = props => overrides.speedminus2(props);
export const Speed1: Override = props => overrides.speed1(props);
export const Opacity: Override = props => overrides.opacity(props);
export const Bg: Override = props => overrides.bg(props);
export const TriggerAnimation: Override = props => ({
  rotation: data.rotation
});
