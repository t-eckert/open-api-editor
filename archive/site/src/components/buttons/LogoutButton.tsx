import { observer } from "mobx-react-lite"
import { useContext } from "react"

import { UserStoreContext } from "../../stores/user"
import LogoutIcon from "../icons/LogoutIcon"

type Props = {
  className?: string
}

const LogoutButton = observer((props: Props) => {
  const userStore = useContext(UserStoreContext)

  return (
    <button
      className={props.className || ""}
      role="menuitem"
      key="logout"
      onClick={() => userStore.logoutUser()}
    >
      <LogoutIcon classes="h-4 w-4 text-gray-700" />
      Logout
    </button>
  )
})

export default LogoutButton
