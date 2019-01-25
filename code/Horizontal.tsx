import { Data, animate, Override, Animatable } from "framer";

import { scrollOverrides, modulate, speed, stickyY } from "./Parallax";

const data = Data({ rotation: Animatable(0) });

// [number, number]: x or y?
// {x: [number, number]}: x
// {x: [number, number], y: [number, number]}: x and y

const overrides = scrollOverrides(
  [100, 800],
  [{ id: "sticky100200", op: speed(-1) }]
  // { x: [100, 200], y: [200, 400] },
  // [{ id: "sticky100200", op: stickyY() }]
);

export const Scroll: Override = props => overrides.scroll(props);
export const Sticky100200: Override = props => overrides.sticky100200(props);
