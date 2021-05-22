import { makeAutoObservable } from "mobx"
import { OpenApiDocument } from "../interfaces"
export class DocumentStore {
  openApiDocument?: OpenApiDocument

  constructor(openApiDocument?: OpenApiDocument) {
    makeAutoObservable(this)

    this.openApiDocument = openApiDocument
  }


}
