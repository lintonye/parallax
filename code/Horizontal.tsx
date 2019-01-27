import { Data, animate, Override, Animatable } from "framer";

import { scrollOverrides, modulate, speed, sticky } from "./Parallax";

const data = Data({ rotation: Animatable(0) });

// [number, number]: x or y?
// {x: [number, number]}: x
// {x: [number, number], y: [number, number]}: x and y

const overrides = scrollOverrides(
  [100, 400],
  [{ id: "sticky100400H", op: sticky() }],
  [0, 1000],
  [
    { id: "opacityH", op: modulate("opacity", [1, 0]) },
    { id: "bgH", op: modulate("background", ["red", "black"]) },
    { id: "speed0H", op: speed(0) },
    { id: "speed05H", op: speed(0.5) },
    { id: "speedminus1H", op: speed(-1) },
    { id: "speedminus2H", op: speed(-2) },
    { id: "speed1H", op: speed(1) }
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
export const Sticky100400H: Override = props => overrides.sticky100400H(props);
export const OpacityH: Override = props => overrides.opacityH(props);
export const BgH: Override = props => overrides.bgH(props);
export const Speed0H: Override = props => overrides.speed0H(props);
export const Speed05H: Override = props => overrides.speed05H(props);
export const Speedminus1H: Override = props => overrides.speedminus1H(props);
export const Speedminus2H: Override = props => overrides.speedminus2H(props);
export const Speed1H: Override = props => overrides.speed1H(props);
export const TriggerAnimation: Override = props => ({
  rotation: data.rotation
});
