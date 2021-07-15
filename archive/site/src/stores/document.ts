import { createContext } from "react"
import { makeAutoObservable } from "mobx"

import { OpenApiDocument } from "../interfaces"
import { defaultOpenApiDocument } from "../constants"
export class DocumentStore {
  private openApiDocument: OpenApiDocument

  constructor() {
    makeAutoObservable(this)

    this.openApiDocument = defaultOpenApiDocument
  }

  setOpenApiDocument(openApiDocument: OpenApiDocument) {
    this.openApiDocument = openApiDocument
  }

  getOpenApiDocument(): OpenApiDocument {
    return this.openApiDocument
  }

  setTitle(title: string) {
    if (this.openApiDocument) this.openApiDocument.info.title = title
  }

  getTitle(): string {
    return this.openApiDocument.info.title
  }

  setVersion(version: string) {
    if (this.openApiDocument) this.openApiDocument.info.version = version
  }

  getVersion(): string {
    return this.openApiDocument.info.version
  }

  setTermsOfService(termsOfService: string) {
    this.openApiDocument.info.termsOfService = termsOfService
  }

  getTermsOfService(): string {
    return this.openApiDocument.info.termsOfService || ""
  }

  setDescription(description: string) {
    this.openApiDocument.info.description = description
  }

  getDescription(): string {
    return this.openApiDocument.info.description
  }
}

export const DocumentStoreContext = createContext(new DocumentStore())