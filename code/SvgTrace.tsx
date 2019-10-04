import { Data, animate, Override, useTransform } from "framer"
import { useContext } from "react"
import { ScrollContext } from "./ScrollContext"

export const Svg: Override = props => {
    const { scrollY } = useContext(ScrollContext)
    const progress = useTransform(scrollY, [0, 200], [0, 100])
    return {
        progress,
    }
}

export const iPadImg: Override = props => {
    const { scrollY } = useContext(ScrollContext)
    const opacity = useTransform(scrollY, [200, 300], [0, 1])
    return {
        opacity,
    }
}
