import { Route } from "react-router-dom";

import DocumentsView from "../components/views/DocumentsView";
import EditorView from "../components/views/EditorView";
import SettingsView from "../components/views/SettingsView";

const View = () => {
  return (
    <div>
      <Route exact={true} path="/" component={DocumentsView} />
      <Route path="/editor/:id" component={EditorView} />
      <Route path="/settings" component={SettingsView} />
    </div>
  );
};

export default View;
