import { useSpring } from "react-spring"

type Direction = "top" | "right" | "bottom" | "left"

const directionMargins: Map<Direction, object> = new Map([
  ["top", { from: { marginTop: -500 }, to: { marginTop: 0 } }],
  ["right", { from: { marginRight: -500 }, to: { marginRight: 0 } }],
  ["bottom", { from: { marginBottom: -500 }, to: { marginBottom: 0 } }],
  ["left", { from: { marginLeft: -500 }, to: { marginLeft: 0 } }]
])

const noOpAnimation = { from: {}, to: {} }


/** `useSlideIn` animation hook
 * 
 * Uses react-spring to animate the entrance of an element.
 * 
 * ```tsx
 * import { animated } from "react-spring"
 * import { useSlideIn } from "src/animations"
 * 
 * const Component = () => {
 *   const slideInFromBottom = useSlideIn("bottom")
 *   
 *   return <animated.div style={slideInFromBottom}>I slide in from bottom!</animated.div>
 * }
 * ```
 * 
 * @param from direction where the slide in will enter from
 */
const useSlideIn = (from: Direction) =>
  useSpring(directionMargins.get(from) || noOpAnimation)


export default useSlideIn