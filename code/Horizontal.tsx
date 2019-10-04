import { Override, useAnimation, useTransform } from "framer"

import { useSticky, useSpeed, useTrigger, useScroll } from "."

export const Sticky100400: Override = props => {
  const { scrollX } = useScroll()
  const x = useSticky(scrollX, [100, 400])
  return { x }
}

export const Opacity: Override = props => {
  const { scrollX } = useScroll()
  const opacity = useTransform(scrollX, [0, 1000], [1, 0])
  return { opacity }
}

export const Bg: Override = props => {
  const { scrollX } = useScroll()
  const background = useTransform(scrollX, [0, 1000], ["#F00", "#000"])
  return { background }
}

export const Speed0: Override = props => {
  const { scrollX } = useScroll()
  const x = useSpeed(scrollX, [0, 1000], 0)
  return { x }
}

export const Speed05: Override = props => {
  const { scrollX } = useScroll()
  const x = useSpeed(scrollX, [0, 1000], 0.5)
  return { x }
}

export const Speedminus1: Override = props => {
  const { scrollX } = useScroll()
  const x = useSpeed(scrollX, [0, 1000], -1)
  return { x }
}

export const Speedminus2: Override = props => {
  const { scrollX } = useScroll()
  const x = useSpeed(scrollX, [0, 1000], -2)
  return { x }
}

export const Speed1: Override = props => {
  const { scrollX } = useScroll()
  const x = useSpeed(scrollX, [0, 1000], 1)
  return { x }
}

export const TriggerAnimation: Override = props => {
  const animate = useAnimation()
  const { scrollX } = useScroll()
  useTrigger(scrollX, [600, 650], direction => {
    animate.start({ rotate: direction > 0 ? 0 : 90 })
  })
  return {
    animate
  }
}
