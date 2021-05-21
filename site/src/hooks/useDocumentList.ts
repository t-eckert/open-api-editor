import { API } from "../config"
import { useQuery } from "react-query"
import { OpenApiDocument } from "../interfaces"

type DocumentListQuery = {
  documents: OpenApiDocument[]
}

const useDocumentList = (token: string): DocumentListQuery => {
  const { data: documents } = useQuery("documentList", async () => {
    const response = await fetch(
      `${API}/graphql`,
      { method: "get", headers: { "Authorization": token } }
    )
    if (!response.ok) {
      throw new Error("Problem fetching data");
    }

    return response.json()
  })

  return { documents }
}

export default useDocumentList