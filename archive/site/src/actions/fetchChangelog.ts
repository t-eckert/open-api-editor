import { API } from "../config"

const fetchChangelog = async (): Promise<string> => {
  const response = await fetch(`${API}/changelog`, { method: "get" })
  return response.text()
}

export default fetchChangelog