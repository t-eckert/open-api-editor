import { observer } from "mobx-react-lite"
import { useContext } from "react"

import { UserStoreContext } from "../../stores/user"
import { generateGitHubLoginUrl, generateRandomString } from "../../functions"

const LoginWithGitHubButton = observer(() => {
  const userStore = useContext(UserStoreContext)

  const state = generateRandomString()
  const url = generateGitHubLoginUrl(state)
  userStore.stateToken = state

  return (
    <a
      className="font-medium transition text-sm px-2 py-1.5 underline rounded-l-xl focus"
      href={url.toString()}
    >
      Login with GitHub
    </a>
  )
})

export default LoginWithGitHubButton
