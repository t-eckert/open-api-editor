import { createContext, useContext } from "react"

import { OpenApiDocument } from "../interfaces"
import { DocumentStore } from "../stores/document"

const useDocumentStore = (openApiDocument?: OpenApiDocument): DocumentStore => {
  const documentStoreContext = createContext(new DocumentStore(openApiDocument))
  const documentStore = useContext(documentStoreContext)
  return documentStore
}

export default useDocumentStore