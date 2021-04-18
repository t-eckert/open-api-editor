import { API } from "../config"

const fetchUserDocuments = async (userId: string, token: string): Promise<Response> => {
  return await fetch(
    `${API}/documents?user_id=${userId}`,
    { method: "get", headers: { "Authorization": token } }
  )
}

export default fetchUserDocuments