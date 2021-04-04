import { API } from "../config"

/** `loginUser` action
 * 
 * @param code one time code from GitHub to authenticate a user
 * @param state random string exchanged with GitHub to confirm the identity of the caller
 * 
 * @returns a JWT with user data or null if the request failed
 */
const loginUser = async (code: string, state: string): Promise<string | null> => {
  const body = JSON.stringify({ code, state })
  const response = await fetch(API + "/users", { method: "POST", body })

  return response.status === 200 ? response.text() : null;
}

export default loginUser