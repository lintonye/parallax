import { Override, useAnimation, useTransform } from "framer"

import { useContext } from "react"
import { ScrollContext } from "./ScrollContext"
import { useSticky, useSpeed, useTrigger } from "use-parallax"

export const Sticky100400: Override = props => {
  const { scrollY } = useContext(ScrollContext)
  const y = useSticky(scrollY, [100, 400])
  return { y }
}

export const Opacity: Override = props => {
  const { scrollY } = useContext(ScrollContext)
  const opacity = useTransform(scrollY, [0, 1000], [1, 0])
  return { opacity }
}

export const Bg: Override = props => {
  const { scrollY } = useContext(ScrollContext)
  const background = useTransform(scrollY, [0, 1000], ["#F00", "#000"])
  return { background }
}

export const Speed0: Override = props => {
  const { scrollY } = useContext(ScrollContext)
  const y = useSpeed(scrollY, [0, 1000], 0)
  return { y }
}

export const Speed05: Override = props => {
  const { scrollY } = useContext(ScrollContext)
  const y = useSpeed(scrollY, [0, 1000], 0.5)
  return { y }
}

export const Speedminus1: Override = props => {
  const { scrollY } = useContext(ScrollContext)
  const y = useSpeed(scrollY, [0, 1000], -1)
  return { y }
}

export const Speedminus2: Override = props => {
  const { scrollY } = useContext(ScrollContext)
  const y = useSpeed(scrollY, [0, 1000], -2)
  return { y }
}

export const Speed1: Override = props => {
  const { scrollY } = useContext(ScrollContext)
  const y = useSpeed(scrollY, [0, 1000], 1)
  return { y }
}

export const TriggerAnimation: Override = props => {
  const animate = useAnimation()
  const { scrollY } = useContext(ScrollContext)
  useTrigger(scrollY, [600, 650], direction => {
    animate.start({ rotate: direction > 0 ? 0 : 90 })
  })
  return {
    animate
  }
}
