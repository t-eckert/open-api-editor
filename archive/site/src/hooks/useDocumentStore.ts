import { useContext } from "react"

import { DocumentStore, DocumentStoreContext } from "../stores/document"

const useDocumentStore = (): DocumentStore => {
  return useContext(DocumentStoreContext)
}

export default useDocumentStore