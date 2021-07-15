import { observer } from "mobx-react-lite"
import useUserStore from "../../hooks/useUserStore"

import LoginWithGitHub from "../buttons/LoginWithGitHubButton"

const UserToken = observer(() => {
  const userStore = useUserStore()
  const user = userStore.user
  const status = userStore.status

  return (
    <div className="flex flex-row items-center rounded-xl">
      {user ? (
        <div className="bg-white rounded-l-xl flex flex-row items-center">
          {user.picture && (
            <img
              className="w-8 h-8 bg-gray-300 rounded-l-xl flex-shrink-0 object-cover"
              src={user.picture}
              alt={`The profile for ${user.name}`}
            />
          )}
          <div className="font-medium text-sm px-2 py-1.5">{user.name}</div>
        </div>
      ) : status === "loggedOut" ? (
        <div className="bg-white rounded-l-xl flex flex-row items-center">
          <LoginWithGitHub className="font-medium transition text-sm px-2 py-1.5 underline rounded-l-xl focus" />
        </div>
      ) : (
        <div className="bg-white rounded-l-xl flex flex-row items-center">
          <div className="animate-pulse font-medium transition text-sm px-2 py-1.5">
            Logging in
          </div>
        </div>
      )}
    </div>
  )
})

export default UserToken
