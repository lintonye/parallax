import * as React from "react"
import {
  ControlType,
  useTransform,
  motion,
  MotionValue,
  addPropertyControls
} from "framer"

export function IPadSvg({ progress }) {
  const outerEdgeLength = useTransform(progress, [0, 50], [0, 1])
  const innerEdgeLength = useTransform(progress, [20, 80], [0, 1])
  const cameraLength = useTransform(progress, [80, 90], [0, 1])
  const homeLength = useTransform(progress, [90, 99], [0, 1])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600">
      <motion.path
        d="M 122 314.5 L 553 108 C 559 106.5 567.5 105 582 110.5 L 878.5 220.5 C 886.5 224 884 231 879 234 L 461.5 470 C 448 477.5 436.5 479 426 474 L 122 326.5 C 116.5 321 118 318.5 122 314.5 Z"
        fill="transparent"
        strokeWidth="3"
        stroke="white"
        style={{ pathLength: outerEdgeLength }}
      />
      <motion.path
        d="M 168 308 L 546 125 L 839 237 L 461.5 447 Z"
        fill="transparent"
        stroke="white"
        style={{ pathLength: innerEdgeLength }}
      />
      <motion.path
        d="M 703.5 168 C 705.985 168 708 169.343 708 171 C 708 172.657 705.985 174 703.5 174 C 701.015 174 699 172.657 699 171 C 699 169.343 701.015 168 703.5 168 Z"
        fill="transparent"
        stroke="white"
        style={{ pathLength: cameraLength }}
      />
      <motion.path
        d="M 286 379 C 293.18 379 299 382.582 299 387 C 299 391.418 293.18 395 286 395 C 278.82 395 273 391.418 273 387 C 273 382.582 278.82 379 286 379 Z"
        fill="transparent"
        stroke="white"
        style={{ pathLength: homeLength }}
      />
    </svg>
  )
}

IPadSvg.defaultProps = {
  text: "Hello World!",
  progress: 0
}

addPropertyControls(IPadSvg, {
  progress: { type: ControlType.Number, title: "Progress", min: 0, max: 99 }
})
