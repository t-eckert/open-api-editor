import { API } from "../config"
import { Feedback } from "../interfaces"

const submitFeedback = async (feedback: Feedback): Promise<any> => {
  const response = await fetch(API + "/feedback", { method: "POST", body: JSON.stringify(feedback) })

  return response
}

export default submitFeedback