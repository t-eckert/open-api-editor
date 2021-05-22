import { useQuery } from "react-query"

import { API } from "../config"
import { OpenApiDocument } from "../interfaces"

const useDocument = (token: string, documentId: string): { openApiDocument?: OpenApiDocument, status: string } => {

  const { data: openApiDocument, status, error } = useQuery<OpenApiDocument, Error>(`document:${documentId}`, async () => {
    const response = await fetch(
      `${API}/graphql?id=${documentId}`,
      { method: "get", headers: { "Authorization": token } }
    )

    if (!response.ok) {
      throw new Error(`Could not load document with id ${documentId}`)
    }

    return response.json()
  })

  return { openApiDocument, status }
}

export default useDocument