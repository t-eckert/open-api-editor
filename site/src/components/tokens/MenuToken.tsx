import { Link } from "react-router-dom"
import { useContext, useRef } from "react"
import { observer } from "mobx-react-lite"

import { UserStoreContext } from "../../stores/user"

import Menu from "../Menu"
import LogoutButton from "../buttons/LogoutButton"
import MenuIcon from "../icons/MenuIcon"
import FeedbackIcon from "../icons/FeedbackIcon"
import SettingsIcon from "../icons/SettingsIcon"
import { useClickToggler } from "../../hooks"

type MenuItem = {
  text: string
  icon: any
  link: string
  className?: string
}

const formatMenuItem = (menuItem: MenuItem) => (
  <Link
    className="menu-item"
    role="menuitem"
    key={menuItem.link}
    to={menuItem.link}
  >
    {menuItem.icon}
    {menuItem.text}
  </Link>
)

/** `MenuToken` component
 *
 * Toggles a menu for handling universal options and routing to Settings and Feedback views
 */
const MenuToken = observer(() => {
  const menuRef = useRef<HTMLDivElement>(null)
  const { toggleMode: showMenu, setToggleMode: setShowMenu } = useClickToggler(
    menuRef,
    false
  )

  const userStore = useContext(UserStoreContext)
  const user = userStore.user

  // Define the menu items based on if the user is logged in

  const menuItems = [
    formatMenuItem({
      text: "Feedback",
      icon: FeedbackIcon({ className: "h-4 w-4 text-gray-700" }),
      link: "/feedback",
    }),
  ]

  // If a user is logged in, give them the ability to view settings or log out
  if (user) {
    menuItems.push(
      formatMenuItem({
        text: "Settings",
        icon: SettingsIcon({ classes: "h-4 w-4 text-gray-700" }),
        link: "/settings",
      })
    )
    menuItems.push(<LogoutButton className="menu-item" />)
  }

  return (
    <div ref={menuRef}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={"menu-toggle " + (showMenu ? "bg-gray-100" : "bg-white")}
      >
        <MenuIcon className="h-5 w-5" />
      </button>
      {showMenu && (
        <Menu wrappingClasses="mt-2 origin-top-right absolute right-2">
          {menuItems}
        </Menu>
      )}
    </div>
  )
})

export default MenuToken
