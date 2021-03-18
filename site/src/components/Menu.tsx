export type MenuItem = {
  onClick: any;
  classes?: string;
  icon?: any;
  text: string;
};

type Props = {
  wrappingClasses: string;
  menuItems: MenuItem[];
};

const Menu = (props: Props) => {
  const menuClasses = [
    "rounded-xl shadow bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
    props.wrappingClasses,
  ].join(" ");

  const itemClasses =
    "flex flex-row items-center gap-3 w-full text-left px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ";

  const items = props.menuItems.map((menuItem: MenuItem) => (
    <button
      onClick={menuItem.onClick}
      className={itemClasses + menuItem.classes}
      role="menuitem"
    >
      {menuItem.icon}
      {menuItem.text}
    </button>
  ));

  return (
    <div className={menuClasses}>
      <div className="py-1" role="none">
        {items}
      </div>
    </div>
  );
};

export default Menu;
