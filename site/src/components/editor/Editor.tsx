import { observer } from "mobx-react-lite";

import Info from "./cards/Info";

const Editor = observer(() => {
  return (
    <div className="pt-8 px-2">
      <Info></Info>
    </div>
  );
});

export default Editor;
