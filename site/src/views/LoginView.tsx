import { observer } from "mobx-react-lite"
import { Redirect } from "react-router-dom"
import { useContext, useEffect } from "react"

import { UserStoreContext } from "../stores/user"
import { loginUser } from "../actions"

const LoginView = observer(() => {
  const userStore = useContext(UserStoreContext)

  const code = new URLSearchParams(window.location.search).get("code")
  const state = userStore.stateToken

  // @ts-ignore The return type of `Promise<void>` is not strictly allowed here
  useEffect(async () => {
    if (code) {
      const jwt = await loginUser(code, state)

      if (jwt) userStore.setUserFromJwt(jwt)

      // TODO when notifications are done, flag a notification that login failed
    }
  })

  return <Redirect to="/" />
})

export default LoginView
