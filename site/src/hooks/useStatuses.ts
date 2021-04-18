import { useContext } from "react"

import { UserStoreContext } from "../stores/user"
import { DocumentsStoreContext } from "../stores/documents"

const useStatuses = (): string[] => {
  const userStore = useContext(UserStoreContext)
  const documentsStore = useContext(DocumentsStoreContext)

  const statuses = []

  if (userStore.status === "checkingIsLoggedIn")
    statuses.push("Checking if you are logged in")
  if (userStore.status === "loggingIn")
    statuses.push("Logging in")
  if (userStore.status === "loggingOut")
    statuses.push("Logging out")
  if (documentsStore.status === "documentsRequested")
    statuses.push("Loading documents")

  return statuses
}

export default useStatuses