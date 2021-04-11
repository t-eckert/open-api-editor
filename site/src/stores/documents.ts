import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { fetchManyDocuments } from "../actions";

import { UserStore } from "./user"

export class DocumentsStore {
  documents: Document[]
  loadingStatus: "idle" | "documentsRequested" | "documentsLoaded" | "documentLoadingFailed"

  constructor() {
    makeAutoObservable(this)

    this.loadingStatus = "idle"
    this.documents = []
  }

  async loadDocuments() {
    this.loadingStatus = "documentsRequested"
    const userStore = new UserStore()

    if (!userStore.user || !userStore.jwt || userStore.status !== "loggedIn") {
      this.loadingStatus = "documentLoadingFailed"
      return
    }

    const documentIds = userStore.user.documentIds
    const token = userStore.jwt

    const response = await fetchManyDocuments(documentIds, token)

    if (!response.ok) {
      this.loadingStatus = "documentLoadingFailed"
      return
    }

    userStore.jwt = await response.headers.get("Authorization")
    this.documents = JSON.parse(await response.json()) as Document[]
    this.loadingStatus = "documentsLoaded"
  }
}

export const DocumentsStoreContext = createContext(new DocumentsStore())