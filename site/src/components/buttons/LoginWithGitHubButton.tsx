import { observer } from "mobx-react-lite"
import { useContext } from "react"

import { UserStoreContext } from "../../stores/user"
import { generateGitHubLoginUrl, generateRandomString } from "../../functions"

type Props = {
  className?: string
}

const LoginWithGitHubButton = observer((props: Props) => {
  const userStore = useContext(UserStoreContext)

  const state = generateRandomString()
  const url = generateGitHubLoginUrl(state)
  userStore.stateToken = state

  return (
    <a
      className={props.className}
      href={url.toString()}
      onClick={() => {
        userStore.status = "loggingIn"
      }}
    >
      Login with GitHub
    </a>
  )
})

export default LoginWithGitHubButton
