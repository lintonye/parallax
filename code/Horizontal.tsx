import { Data, animate, Override, Animatable } from "framer";

import { scrollOverrides, modulate, speed, sticky } from "./Parallax";

const data = Data({ rotation: Animatable(0) });

// [number, number]: x or y?
// {x: [number, number]}: x
// {x: [number, number], y: [number, number]}: x and y

const overrides = scrollOverrides(
  [100, 400],
  [{ id: "sticky100400", op: sticky() }],
  [0, 1000],
  [
    { id: "opacity", op: modulate("opacity", [1, 0]) },
    { id: "bg", op: modulate("background", ["red", "black"]) },
    { id: "speed0", op: speed(0) },
    { id: "speed05", op: speed(0.5) },
    { id: "speedminus1", op: speed(-1) },
    { id: "speedminus2", op: speed(-2) },
    { id: "speed1", op: speed(1) }
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
      op: itemId => ({ vx }) => {
        // vx: the velocity of scrolling in x direction
        //   vx > 0: scrolling right
        //   vx < 0: scrolling left
        animate.spring(data.rotation, vx > 0 ? 180 : 0);
      }
    }
  ]
);

export const Scroll: Override = props => overrides.scroll(props);
export const Sticky100400: Override = props => overrides.sticky100400(props);
export const Opacity: Override = props => overrides.opacity(props);
export const Bg: Override = props => overrides.bg(props);
export const Speed0: Override = props => overrides.speed0(props);
export const Speed05: Override = props => overrides.speed05(props);
export const Speedminus1: Override = props => overrides.speedminus1(props);
export const Speedminus2: Override = props => overrides.speedminus2(props);
export const Speed1: Override = props => overrides.speed1(props);
export const TriggerAnimation: Override = props => ({
  rotation: data.rotation
});
