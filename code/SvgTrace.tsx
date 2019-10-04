import { Override, useTransform } from "framer"
import { useScroll } from "."

export const Svg: Override = () => {
  const { scrollY } = useScroll()
  const progress = useTransform(scrollY, [0, 200], [0, 100])
  return {
    progress
  }
}

export const iPadImg: Override = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [200, 300], [0, 1])
  return {
    opacity
  }
}
