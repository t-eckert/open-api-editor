import UserToken from "./tokens/UserToken";
import CommandPalette from "./commandPalette/CommandPalette";
import PathToken from "./tokens/PathToken";
import MenuToken from "./tokens/MenuToken";

type Props = {
  documentName: string;
  showCommandPalette: boolean;
  user: any; // User
};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 w-full px-2 py-2 grid grid-cols-4 grid-rows-2 gap-2 md:grid-rows-1">
      <div className="col-start-1 col-span-2 md:col-span-1">
        <PathToken />
      </div>
      <div className="row-start-2 col-span-4 sm:col-span-2 sm:col-start-2 md:row-start-1 md:col-span-2 md:col-start-2">
        {props.showCommandPalette ? <CommandPalette /> : <div></div>}
      </div>
      <div className="col-start-3 col-span-2 md:col-start-4 md:col-span-1 flex justify-end">
        <div className="z-10 shadow rounded-xl flex flex-row items-start justify-self-start">
          <UserToken />
          <MenuToken />
        </div>
      </div>
    </header>
  );
};

export default Header;
