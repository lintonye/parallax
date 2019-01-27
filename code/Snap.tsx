import { Data, animate, Override, Animatable } from "framer";

import { snap, scrollOverrides } from "./ScrollOverrides";

const height = 440;

const overrides = scrollOverrides(
  [0, height],
  [{ op: snap() }],
  [height, 2 * height],
  [{ op: snap() }],
  [2 * height, 3 * height],
  [{ op: snap() }]
);

const width = 400;
const overridesH = scrollOverrides(
  [0, width],
  [{ op: snap() }],
  [width, 2 * width],
  [{ op: snap() }],
  [2 * width, 3 * width],
  [{ op: snap() }]
);

// export const Scroll: Override = props => overrides.scroll(props);
let scrollContentOffsetY;

export const ScrollToLayer1: Override = () => ({
  onTap() {
    animate(scrollContentOffsetY, -800);
  }
});

export const Scroll: Override = props => {
  const os = overrides.scroll(props);
  scrollContentOffsetY = os.contentOffsetY;
  return os;
};

export const ScrollH: Override = props => overridesH.scroll(props);
