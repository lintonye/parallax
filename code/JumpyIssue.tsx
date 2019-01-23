import { Data, animate, Override, Animatable } from "framer";
import {
  scrollOverrides,
  stickyY,
  speedY,
  mergeOverrides,
  modulate
} from "./ScrollOverrides";

const overrides = scrollOverrides(
  [0, 200],
  [{ id: "sticker", op: stickyY() }],
  [200, 500],
  [{ id: "sticker", op: speedY(0.5) }]
);

export const Scroll: Override = props => overrides.scroll(props);

export const Sticker: Override = props => overrides.sticker(props);
