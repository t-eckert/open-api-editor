import { useContext } from "react"

import { UserStoreContext } from "../stores/user"

const useStatuses = (): string[] => {
  const userStore = useContext(UserStoreContext)

  const statuses = []

  if (userStore.status === "checkingIsLoggedIn")
    statuses.push("Checking if you are logged in")
  if (userStore.status === "loggingIn")
    statuses.push("Logging in")
  if (userStore.status === "loggingOut")
    statuses.push("Logging out")

  return statuses
}

export default useStatuses