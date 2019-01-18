import { Data, animate, Override, Animatable } from "framer";

import { snapY, scrollOverrides } from "./ScrollOverrides";

const height = 440;

const overrides = scrollOverrides(
  [0, height],
  [{ op: snapY() }],
  [height, 2 * height],
  [{ op: snapY() }],
  [2 * height, 3 * height],
  [{ op: snapY() }]
);

export const Scroll: Override = props => overrides.scroll(props);
