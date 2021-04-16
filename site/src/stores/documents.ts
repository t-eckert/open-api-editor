import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { fetchUserDocuments } from "../actions";
import { OpenApiDocument } from "../interfaces";

import { UserStore } from "./user"

export class DocumentsStore {
  documents: OpenApiDocument[]
  status: "idle" | "documentsRequested" | "documentsLoaded" | "documentLoadingFailed"

  constructor() {
    makeAutoObservable(this)

    this.status = "idle"
    this.documents = []
  }

  async loadDocuments() {
    this.status = "documentsRequested"
    const userStore = new UserStore()

    if (!userStore.user || !userStore.jwt || userStore.status !== "loggedIn") {
      this.status = "documentLoadingFailed"
      return
    }

    const userId = userStore.user.id
    const token = userStore.jwt

    const response = await fetchUserDocuments(userId, token)

    if (!response.ok) {
      this.status = "documentLoadingFailed"
      return
    }

    userStore.jwt = await response.headers.get("Authorization")
    const body = await response.json()
    this.documents = JSON.parse(JSON.stringify(body)) as OpenApiDocument[]
    this.status = "documentsLoaded"
  }
}

export const DocumentsStoreContext = createContext(new DocumentsStore())