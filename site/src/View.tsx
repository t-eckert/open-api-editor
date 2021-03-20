import { Route } from "react-router-dom"

import DocumentsView from "./views/DocumentsView"
import EditorView from "./views/EditorView"
import SettingsView from "./views/SettingsView"
import ChangelogView from "./views/ChangelogView"

const View = () => {
  return (
    <div>
      <Route exact={true} path="/" component={DocumentsView} />
      <Route path="/editor/:id" component={EditorView} />
      <Route path="/settings" component={SettingsView} />
      <Route path="/changelog" component={ChangelogView} />
    </div>
  )
}

export default View
