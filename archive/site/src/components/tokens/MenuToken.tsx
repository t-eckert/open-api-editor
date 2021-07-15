import { Link } from "react-router-dom"
import { useContext, Fragment } from "react"
import { observer } from "mobx-react-lite"
import { Menu, Transition } from "@headlessui/react"

import { UserStoreContext } from "../../stores/user"

import LogoutButton from "../buttons/LogoutButton"
import MenuIcon from "../icons/MenuIcon"
import FeedbackIcon from "../icons/FeedbackIcon"
import SettingsIcon from "../icons/SettingsIcon"

/** `MenuToken` component
 *
 * Toggles a menu for handling universal options and routing to Settings and Feedback views
 */
const MenuToken = observer(() => {
  const userStore = useContext(UserStoreContext)
  const user = userStore.user

  return (
    <Menu>
      <Menu.Button className="border-l pl-1 pr-2 py-1.5 rounded-r-xl cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus">
        <MenuIcon className="h-5 w-5 text-gray-800" />
      </Menu.Button>
      <Menu.Items className="py-2 absolute origin-top-right right-2 mt-10 flex flex-col rounded-xl bg-white shadow focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`menu-item ${active && "bg-yellow-400 text-gray-900"}`}
              to="/feedback"
            >
              <FeedbackIcon className="h-4 w-4" />
              <span>Feedback</span>
            </Link>
          )}
        </Menu.Item>
        {user && (
          <>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`menu-item ${
                    active && "bg-yellow-400 text-gray-900"
                  }`}
                  to="/settings"
                >
                  <SettingsIcon className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <LogoutButton
                  className={`menu-item ${
                    active && "bg-yellow-400 text-gray-900"
                  }`}
                />
              )}
            </Menu.Item>
          </>
        )}
      </Menu.Items>
    </Menu>
  )
})

export default MenuToken
