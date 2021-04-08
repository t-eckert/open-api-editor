import { useState } from "react"
import { useSpring, animated } from "react-spring"

import FeedbackForm from "../components/FeedbackForm"

const FeedbackView = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const props = useSpring({ marginTop: isSubmitted ? -500 : 128 })

  return (
    <div className="w-full">
      <animated.section
        className="p-3 bg-white rounded-xl shadow max-w-xl mx-auto"
        style={props}
      >
        <FeedbackForm
          onSubmit={() => setIsSubmitted(true)}
          redirectDelay={250}
        />
      </animated.section>
    </div>
  )
}

export default FeedbackView
