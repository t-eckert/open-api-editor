import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { UiStoreContext } from "../stores/ui";

const View = observer(() => {
  const ui = useContext(UiStoreContext);

  return <div>{ui.viewComponent()}</div>;
});

export default View;
