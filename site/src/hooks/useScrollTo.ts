import { useEffect } from "react"

/** `useScrollTo` hook
 * 
 * Scrolls the user to the given x and y coordinates on the page 
 * 
 * @param x horizontal coordinate of the scroll target
 * @param y vertical coordinate of the scroll target
 */
const useScrollTo = (x: number, y: number) => {
  useEffect(() => {
    window.scrollTo(x, y)
  })
}

export default useScrollTo