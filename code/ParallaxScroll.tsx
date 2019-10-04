import * as React from "react"
import {
  Scroll,
  useMotionValue,
  RenderTarget,
  addPropertyControls,
  ControlType
} from "framer"
import { ScrollContext } from "./ScrollContext"
import { usePositiveOffset } from "use-parallax"
import { EmptyConnector } from "./EmptyConnector"

function Thumbnail() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-book"
      viewBox="0 0 24 24"
    >
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  )
}

function ParallaxScrollPreview({ children, ...props }) {
  const offsetX = useMotionValue(0)
  const offsetY = useMotionValue(0)
  const scrollX = usePositiveOffset(offsetX)
  const scrollY = usePositiveOffset(offsetY)
  return React.Children.count(children) > 0 ? (
    <ScrollContext.Provider value={{ scrollX, scrollY }}>
      <Scroll {...props} contentOffsetX={offsetX} contentOffsetY={offsetY}>
        {children}
      </Scroll>
    </ScrollContext.Provider>
  ) : (
    <EmptyConnector title="Connect to a Frame →" description="" />
  )
}

export function ParallaxScroll(props) {
  const Comp =
    RenderTarget.current() === RenderTarget.thumbnail
      ? Thumbnail
      : ParallaxScrollPreview
  return <Comp {...props} />
}

// Use Scroll["defaultProps"] instead of Scroll.defaultProps
// to prevent TypeScript error
ParallaxScroll.defaultProps = Scroll["defaultProps"]
addPropertyControls(ParallaxScroll, {
  ...Scroll["propertyControls"],
  children: {
    type: ControlType.ComponentInstance,
    title: "Content"
  }
})
