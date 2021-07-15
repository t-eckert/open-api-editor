import isEmail from "validator/lib/isEmail"

import { Feedback } from "../interfaces"

const validateFeedback = (feedback: Feedback): string | null => {
  if (feedback.feedbackBody === "")
    return "Please provide feedback in the text area"
  if (feedback.email && !isEmail(feedback.email))
    return "Please format email correctly"
  return null
}

export default validateFeedback