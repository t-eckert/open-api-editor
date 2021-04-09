import { useContext } from "react"

import { UserStore, UserStoreContext } from "../stores/user"

const useUser = (): UserStore => {
  const userStore = useContext(UserStoreContext)
  return userStore
}

export default useUser