import { Data, animate, Override, Animatable } from "framer";

import { scrollOverrides, modulate, speedY, stickyY } from "./Parallax";

const data = Data({ rotation: Animatable(0) });

// range defaults: same direction as scroll => as specified

const overrides = scrollOverrides({ x: [100, 200], y: [200, 400] }, [
  { id: "sticky100200", op: stickyY() }
]);

export const Scroll: Override = props => overrides.scroll(props);
export const Sticky100200: Override = props => overrides.sticky100200(props);
