import { API } from "../config"
import { Feedback } from "../interfaces"

/** `submitFeedback` action
 * 
 * Issues a POST request to /feedback with a Feedback object and returns the response
 */
const submitFeedback = async (feedback: Feedback): Promise<any> =>
  await fetch(API + "/feedback", { method: "POST", body: JSON.stringify(feedback) })


export default submitFeedback