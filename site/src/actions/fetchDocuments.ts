import { API } from "../config"

const fetchManyDocuments = async (ids: string[], token: string): Promise<Response> => {
  return await fetch(API + "/documents", { headers: { "Authorization": token }, body: JSON.stringify({ "documentIds": ids }) })
}

export default fetchManyDocuments