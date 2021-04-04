import { useContext } from "react"

import { User } from "../interfaces"
import { UserStoreContext } from "../stores/user"

const useUser = (): User | null => {
  const userStore = useContext(UserStoreContext)
  return userStore.user
}

export default useUser