import { useContext, useEffect, useState } from "react"

import { DocumentsStoreContext } from "../stores/documents"

const useUserDocuments = () => {
  const documentsStore = useContext(DocumentsStoreContext)

  const [documents, setDocuments] = useState<Document[]>([])

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