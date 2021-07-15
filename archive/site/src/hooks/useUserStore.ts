import { useContext } from "react"

import { UserStore, UserStoreContext } from "../stores/user"

const useUserStore = (): UserStore => {
  const userStore = useContext(UserStoreContext)
  return userStore
}

export default useUserStore