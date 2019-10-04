import { Override, useAnimation, useTransform } from "framer"

import { useSticky, useSpeed, useTrigger, useScroll } from "."

export const Sticky100400: Override = props => {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [100, 400])
  return { y }
}

export const Opacity: Override = props => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 1000], [1, 0])
  return { opacity }
}

export const Bg: Override = props => {
  const { scrollY } = useScroll()
  const background = useTransform(scrollY, [0, 1000], ["#F00", "#000"])
  return { background }
}

export const Speed0: Override = props => {
  const { scrollY } = useScroll()
  const y = useSpeed(scrollY, [0, 1000], 0)
  return { y }
}

export const Speed05: Override = props => {
  const { scrollY } = useScroll()
  const y = useSpeed(scrollY, [0, 1000], 0.5)
  return { y }
}

export const Speedminus1: Override = props => {
  const { scrollY } = useScroll()
  const y = useSpeed(scrollY, [0, 1000], -1)
  return { y }
}

export const Speedminus2: Override = props => {
  const { scrollY } = useScroll()
  const y = useSpeed(scrollY, [0, 1000], -2)
  return { y }
}

export const Speed1: Override = props => {
  const { scrollY } = useScroll()
  const y = useSpeed(scrollY, [0, 1000], 1)
  return { y }
}

export const TriggerAnimation: Override = props => {
  const animate = useAnimation()
  const { scrollY } = useScroll()
  useTrigger(scrollY, [600, 650], direction => {
    animate.start({ rotate: direction > 0 ? 0 : 90 })
  })
  return {
    animate
  }
}
