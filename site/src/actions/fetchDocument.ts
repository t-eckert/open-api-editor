import { API } from "../config"

const fetchDocument = async (id: string): Promise<any> => {
  const response = await fetch(`${API}/documents/${id}`)

  return response.body
}

export default fetchDocument