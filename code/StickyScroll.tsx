import { Override } from "framer"
import { scrollOverrides, sticky } from "./Parallax"
// import { stickyScrollY, mergeOverrides } from "./Parallax";

// const titleHeight = 71 + 10;
// const [scrollOverridesAbout, aboutOverrides] = stickyScrollY([
//   422,
//   696 - titleHeight
// ]);
// const [scrollOverridesPort, portOverrides] = stickyScrollY([
//   696,
//   1136 - titleHeight
// ]);
// const [scrollOverridesContact, contactOverrides] = stickyScrollY([
//   1136,
//   1500 - titleHeight
// ]);
// export const Scroll: Override = props =>
//   mergeOverrides(
//     scrollOverridesAbout(props),
//     scrollOverridesPort(props),
//     scrollOverridesContact(props)
//   );

// export const About: Override = props => aboutOverrides(props);

// export const Portfolio: Override = props => portOverrides(props);

// export const Contact: Override = props => contactOverrides(props);

const titleHeight = 71 + 10
const overrides = scrollOverrides(
  [422, 696 - titleHeight],
  [{ id: "about", op: sticky() }],
  [696, 1136 - titleHeight],
  [{ id: "portfolio", op: sticky() }],
  [1136, 1500 - titleHeight],
  [{ id: "contact", op: sticky() }]
)

export const Scroll: Override = props => overrides.scroll(props)

export const About: Override = props => overrides.about(props)

export const Portfolio: Override = props => overrides.portfolio(props)

export const Contact: Override = props => overrides.contact(props)
