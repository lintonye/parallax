import { useAnimation, Override, useTransform } from "framer"
import { useSticky, useSpeed, useTrigger, useScroll } from "."

export const Blocker: Override = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [0, 1])
  return { opacity }
}

export const IPhoneXR: Override = () => {
  const { scrollY } = useScroll()
  const y = useSpeed(scrollY, [100, 350], 2, [500, 1050], -1)
  const scale = useTransform(scrollY, [300, 750], [1.5, 1])
  return { y, scale }
}

export const PhoneNameSize: Override = () => {
  const { scrollY } = useScroll()
  const y = useSticky(scrollY, [500, 1050])
  const animate = useAnimation()
  useTrigger(scrollY, [750, 800], direction => {
    animate.start({ opacity: direction < 0 ? 1 : 0 })
  })
  return { top: 850, animate, y, opacity: 0 }
}

export const FeatureContainer: Override = () => {
  return {
    top: 1180
  }
}

export const Feature1: Override = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [800, 850], [0, 1])
  return { opacity }
}

export const Feature2: Override = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [850, 900], [0, 1])
  return { opacity }
}

export const Feature3: Override = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [900, 950], [0, 1])
  return { opacity }
}

export const Feature4: Override = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [950, 1000], [0, 1])
  return { opacity }
}

export const Feature5: Override = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [1000, 1050], [0, 1])
  return { opacity }
}
