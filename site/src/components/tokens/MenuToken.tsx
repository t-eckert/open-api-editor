import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";

import Menu, { MenuItem } from "../Menu";
import MenuIcon from "../icons/MenuIcon";
import FeedbackIcon from "../icons/FeedbackIcon";
import SettingsIcon from "../icons/SettingsIcon";
import LogoutIcon from "../icons/LogoutIcon";
import { UiStoreContext } from "../../stores/ui";

const MenuToken = observer(() => {
  const uiStore = useContext(UiStoreContext);

  let [showMenu, setShowMenu] = useState(false);

  const menuItems: MenuItem[] = [
    {
      text: "Feedback",
      icon: FeedbackIcon({ classes: "h-4 w-4 text-gray-700" }),
      onClick: () => {},
    },
    {
      text: "Settings",
      icon: SettingsIcon({ classes: "h-4 w-4 text-gray-700" }),
      onClick: () => {
        uiStore.updateView("settings");
      },
    },
    {
      text: "Logout",
      classes: "border-t border-gray-200",
      icon: LogoutIcon({
        classes: "h-4 w-4 text-gray-700",
      }),
      onClick: () => {},
    },
  ];

  const menuToggleClasses = (showMenu: boolean) =>
    "border-l pl-1 pr-2 py-1.5 rounded-r-xl cursor-pointer hover:bg-gray-100 " +
    (showMenu ? "bg-gray-100" : "bg-white");

  return (
    <div>
      <div
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
  );
});

export default MenuToken;
