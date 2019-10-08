export * from "use-parallax"
import { useContext, useEffect } from "react"
import { ScrollContext, ScrollContextType } from "./ScrollContext"
import { MotionValue } from "framer-motion"

export function useScroll() {
  return useContext<ScrollContextType>(ScrollContext)
}

export function useTrackMotionValue(
  mv: MotionValue<number>,
  action: (v: number) => void
) {
  useEffect(() => {
    const unsub = mv.onChange(action)
    return () => unsub()
  }, [mv])
}

export function useTrackScrollX(action: (v: number) => void) {
  const { scrollX } = useScroll()
  useTrackMotionValue(scrollX, action)
}

export function useTrackScrollY(action: (v: number) => void) {
  const { scrollY } = useScroll()
  useTrackMotionValue(scrollY, action)
}
