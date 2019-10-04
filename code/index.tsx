export * from "use-parallax"
import { useContext } from "react"
import { ScrollContext } from "./ScrollContext"

export function useScroll() {
  return useContext(ScrollContext)
}
