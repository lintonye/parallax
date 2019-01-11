import { Data, animate, Override, Animatable } from "framer";

import { scrollAwayHeader } from "./Parallax";

const [scrollOverrides, headerOverrides] = scrollAwayHeader();

export const Scroll: Override = props => scrollOverrides(props);

export const Header: Override = props => headerOverrides(props);
