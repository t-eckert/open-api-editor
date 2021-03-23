import { API } from "../config"

const loginUser = async (code: string): Promise<string> => {
  const response = await fetch(API + "/login", { method: "POST" })

  return response.text()
}

export default loginUser