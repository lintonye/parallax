import { Override } from "framer"

import { useContext } from "react"
import { ScrollContext } from "./ScrollContext"
import { useSticky } from "use-parallax"

const titleHeight = 71 + 10

export const About: Override = () => {
  const { scrollY } = useContext(ScrollContext)
  const y = useSticky(scrollY, [422, 696 - titleHeight])
  return { y }
}

export const Portfolio: Override = () => {
  const { scrollY } = useContext(ScrollContext)
  const y = useSticky(scrollY, [696, 1136 - titleHeight])
  return { y }
}

export const Contact: Override = () => {
  const { scrollY } = useContext(ScrollContext)
  const y = useSticky(scrollY, [1136, 1500 - titleHeight])
  return { y }
}
