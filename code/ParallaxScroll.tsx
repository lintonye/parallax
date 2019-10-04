import * as React from "react"
import { Scroll, useMotionValue } from "framer"
import { ScrollContext } from "./ScrollContext"
import { usePositiveOffset } from "use-parallax"

export function ParallaxScroll({ children, ...props }) {
    const offsetX = useMotionValue(0)
    const offsetY = useMotionValue(0)
    const scrollX = usePositiveOffset(offsetX)
    const scrollY = usePositiveOffset(offsetY)
    return (
        <ScrollContext.Provider value={{ scrollX, scrollY }}>
            <Scroll
                {...props}
                contentOffsetX={offsetX}
                contentOffsetY={offsetY}
            >
                {children}
            </Scroll>
        </ScrollContext.Provider>
    )
}

// Use Scroll["defaultProps"] instead of Scroll.defaultProps
// to prevent TypeScript error
ParallaxScroll.defaultProps = Scroll["defaultProps"]
ParallaxScroll.propertyControls = Scroll["propertyControls"]
