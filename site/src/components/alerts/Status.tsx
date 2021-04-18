import { animated } from "react-spring"

import { useSlideIn } from "../../animations"

import LoadingIcon from "../icons/LoadingIcon"

const Status = (props: { text?: string }) => {
  const slideInFromRight = useSlideIn("right")

  return (
    <animated.div
      className="bg-white pl-2 pr-3 py-1 shadow flex flex-row items-center rounded-full"
      style={slideInFromRight}
    >
      <LoadingIcon className="animate-spin -ml-1 mr-2 h-5 w-5 text-yellow-600" />
      <div className="text-sm font-medium text-gray-900">{props.text}</div>
    </animated.div>
  )
}

export default Status
