import * as React from "react"
import { Override, Data } from "framer"
import { useContext } from "react"
import { ScrollContext } from "./ScrollContext"
import { useSticky } from "use-parallax"

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
  taps: 0
})

export function Sticky(props): Override {
  const { scrollY } = useContext(ScrollContext)
  const y = useSticky(scrollY, [100, 200], [400, 500])
  return {
    y
  }
}

export function RotateFrame(props): Override {
  return {
    animate: {
      rotate: appState.taps * 90
    }
  }
}

export function TextElement(props): Override {
  return {
    text: appState.taps
  }
}
