import { Override } from "framer"

import { useSticky, useScroll } from "."

const titleHeight = 71 + 10

export const About: Override = () => {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [422, 696 - titleHeight])
  return { y }
}

export const Portfolio: Override = () => {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [696, 1136 - titleHeight])
  return { y }
}

export const Contact: Override = () => {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [1136, 1500 - titleHeight])
  return { y }
}
