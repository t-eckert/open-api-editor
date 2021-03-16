import UserToken from "../Tokens/UserToken";
import CommandPalette from "../CommandPalette";
import TitleToken from "../Tokens/TitleToken";

type Props = {
  documentName: string;
  showCommandPalette: boolean;
  user: any; // User
};

const Header = (props: Props) => {
  return (
    <header className="w-full px-2 py-2 flex flex-row justify-between items-center">
      <TitleToken text={"Open API Editor"} />
      {props.showCommandPalette ? <CommandPalette /> : <div></div>}
      <UserToken />
    </header>
  );
};

export default Header;
