import * as React from "react"

const key = "lintonye.parallax.ScrollContext"

// Put the context object in window. This is needed to make sure the overrides work
// in the published package.
// Reason? In the published package. The `ScrollContext` is loaded from a compiled file `dist/index.js`.
// import { useScroll } from "@framer/lintonye.parallax/code" will create another instance
// of `ScrollContext`.
if (!window[key]) {
  window[key] = React.createContext({
    scrollX: null,
    scrollY: null
  })
}

export const ScrollContext = window[key]
