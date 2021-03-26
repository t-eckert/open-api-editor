import { observer } from "mobx-react-lite"
import { useContext } from "react"

import { UserStoreContext } from "../../stores/user"
import { GITHUB_APP_CLIENT_ID } from "../../config"
import { generateRandomString } from "../../functions"

const LoginWithGitHubButton = observer(() => {
  const userStore = useContext(UserStoreContext)

  const state = generateRandomString()

  let url = new URL("https://github.com/login/oauth/authorize")
  url.searchParams.set("client_id", GITHUB_APP_CLIENT_ID)
  url.searchParams.set("state", state)

  userStore.stateToken = state

  return (
    <a
      className="font-medium text-sm px-2 py-1.5 underline"
      href={url.toString()}
    >
      Login with GitHub
    </a>
  )
})

export default LoginWithGitHubButton
