import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { observer } from "mobx-react-lite"

import { UserStoreContext } from "../../stores/user"

import Menu from "../Menu"
import LogoutButton from "../buttons/LogoutButton"
import MenuIcon from "../icons/MenuIcon"
import FeedbackIcon from "../icons/FeedbackIcon"
import SettingsIcon from "../icons/SettingsIcon"

const menuToggleClasses = (showMenu: boolean) =>
  [
    "border-l pl-1 pr-2 py-1.5 rounded-r-xl cursor-pointer hover:bg-gray-100",
    "focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-60",
    showMenu ? "bg-gray-100" : "bg-white",
  ].join(" ")

type MenuItem = {
  text: string
  icon: any
  link: string
  classes?: string
}

const formatMenuItem = (menuItem: MenuItem) => (
  <Link
    className="menuitem"
    role="menuitem"
    key={menuItem.link}
    to={menuItem.link}
  >
    {menuItem.icon}
    {menuItem.text}
  </Link>
)

const MenuToken = observer(() => {
  const userStore = useContext(UserStoreContext)
  const user = userStore.user

  const [showMenu, setShowMenu] = useState(false)

  const menuItems = [
    formatMenuItem({
      text: "Feedback",
      icon: FeedbackIcon({ classes: "h-4 w-4 text-gray-700" }),
      link: "/feedback",
    }),
  ]

  if (user) {
    menuItems.push(
      formatMenuItem({
        text: "Settings",
        icon: SettingsIcon({ classes: "h-4 w-4 text-gray-700" }),
        link: "/settings",
      })
    )
    menuItems.push(<LogoutButton className="menuitem" />)
  }

  return (
    <div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={menuToggleClasses(showMenu)}
      >
        <MenuIcon classes="h-5 w-5" />
      </button>
      {showMenu && (
        <Menu
          wrappingClasses="mt-2 origin-top-right absolute right-2"
          menuItems={menuItems}
        />
      )}
    </div>
  )
})

export default MenuToken
