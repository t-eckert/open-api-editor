import { API } from "../config"
import { useQuery } from "react-query"

import { OpenApiDocument } from "../interfaces"

import useAlerts from "./useAlerts"

type DocumentListQuery = {
  documents: OpenApiDocument[]
}

const useDocumentList = (token: string): DocumentListQuery => {
  const alertStore = useAlerts()

  const { data: documents, status, error } = useQuery("documentList", async () => {
    const response = await fetch(
      `${API}/graphql`,
      { method: "get", headers: { "Authorization": token } }
    )
    if (!response.ok) {
      throw new Error("Problem fetching data");
    }

    return response.json()
  })


  if (status === "loading")
    alertStore.addStatus({ statusKey: "loadingDocuments", text: "Loading documents" })
  else
    alertStore.removeStatus("loadingDocuments")

  if (status === "error") {
    const errorText = typeof error === "string" ? error : "error"
    alertStore.addNotification({ notificationKey: "errorLoadingDocuments", title: "Could not load documents", text: `Server responded with ${errorText}.`, role: "error" })
  }

  return { documents }
}

export default useDocumentList