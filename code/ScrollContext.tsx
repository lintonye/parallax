import * as React from "react"

const key = "lintonye.parallax.ScrollContext"

// Put the context object in window. This is needed to make sure the overrides work
// in the published package.
if (!window[key]) {
  window[key] = React.createContext({
    scrollX: null,
    scrollY: null
  })
}

export const ScrollContext = window[key]
