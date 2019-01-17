import { Data, animate, Override, Animatable } from "framer";

import { scrollAwayHeader } from "./ScrollOverrides";

const [scrollOverrides, headerOverrides] = scrollAwayHeader(81, 1408);

export const Scroll: Override = props => scrollOverrides(props);

export const Header: Override = props => headerOverrides(props);
