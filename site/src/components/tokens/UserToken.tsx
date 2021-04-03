import { observer } from "mobx-react-lite"
import { useContext } from "react"

import { UserStoreContext } from "../../stores/user"

import LoginWithGitHub from "../buttons/LoginWithGitHubButton"

const UserToken = observer(() => {
  const userStore = useContext(UserStoreContext)
  const user = userStore.user

  return (
    <div className="flex flex-row items-center rounded-xl">
      {user ? (
        <div className="bg-white rounded-l-xl flex flex-row items-center">
          {user.picture ? (
            <img
              className="w-8 h-8 bg-gray-300 rounded-l-xl flex-shrink-0 object-cover"
              src={user.picture}
              alt={`The profile for ${user.name}`}
            />
          ) : (
            <div></div>
          )}
          <div className="font-medium text-sm px-2 py-1.5">{user.name}</div>
        </div>
      ) : (
        <div className="bg-white rounded-l-xl flex flex-row items-center">
          <LoginWithGitHub />
        </div>
      )}
    </div>
  )
})

export default UserToken
