import { API } from "../config"

const loginUser = async (code: string, state: string): Promise<string> => {
  const body = JSON.stringify({ code, state })
  const response = await fetch(API + "/login", { method: "POST", body })

  return response.text()
}

export default loginUser