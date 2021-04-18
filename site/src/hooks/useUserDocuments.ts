import { useContext, useEffect, useState } from "react"
import { OpenApiDocument } from "../interfaces"

import { DocumentsStoreContext } from "../stores/documents"

const useUserDocuments = (): OpenApiDocument[] => {
  const documentsStore = useContext(DocumentsStoreContext)

  const [documents, setDocuments] = useState<OpenApiDocument[]>([])

  useEffect(() => {
    const loadDocuments = async () => {
      await documentsStore.loadDocuments()
      setDocuments(documentsStore.documents)
    }

    loadDocuments()
  }, [setDocuments, documentsStore])

  return documents
}

export default useUserDocuments