import { observer } from "mobx-react-lite";
import { useContext } from "react";

import DocumentsView from "../components/views/DocumentsView";
import EditorView from "../components/views/EditorView";
import SettingsView from "../components/views/SettingsView";
import { UiStoreContext } from "../stores/ui";

const View = observer(() => {
  const ui = useContext(UiStoreContext);

  return ui.view === "documents" ? (
    <DocumentsView />
  ) : ui.view === "editor" ? (
    <EditorView />
  ) : ui.view === "settings" ? (
    <SettingsView />
  ) : (
    <DocumentsView />
  );
});

export default View;
