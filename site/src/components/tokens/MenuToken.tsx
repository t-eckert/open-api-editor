import { useState } from "react"

import Menu from "../Menu"
import MenuIcon from "../icons/MenuIcon"
import FeedbackIcon from "../icons/FeedbackIcon"
import SettingsIcon from "../icons/SettingsIcon"
import LogoutIcon from "../icons/LogoutIcon"

const menuToggleClasses = (showMenu: boolean) =>
  "border-l pl-1 pr-2 py-1.5 rounded-r-xl cursor-pointer hover:bg-gray-100 " +
  (showMenu ? "bg-gray-100" : "bg-white")

type MenuItem = {
  text: string
  icon: any
  link: string
  classes?: string
}

const itemClasses =
  "flex flex-row items-center gap-3 w-full text-left px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "

const menuItems = [
  {
    text: "Feedback",
    icon: FeedbackIcon({ classes: "h-4 w-4 text-gray-700" }),
    link: "/feedback",
  },
  {
    text: "Settings",
    icon: SettingsIcon({ classes: "h-4 w-4 text-gray-700" }),
    link: "/settings",
  },
].map((menuItem: MenuItem) => (
  <button className={itemClasses} role="menuitem">
    {menuItem.icon}
    {menuItem.text}
  </button>
))

menuItems.push(
  <button className={itemClasses}>
    <LogoutIcon classes="h-4 w-4 text-gray-700" />
    Logout
  </button>
)

const MenuToken = () => {
  let [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <div
        tabIndex={1}
        onClick={() => setShowMenu(!showMenu)}
        className={menuToggleClasses(showMenu)}
      >
        <MenuIcon classes="h-5 w-5" />
      </div>
      {showMenu ? (
        <Menu
          wrappingClasses="z-50 mt-2 origin-top-right absolute right-2"
          menuItems={menuItems}
        />
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default MenuToken
