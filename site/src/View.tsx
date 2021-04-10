import { Route } from "react-router-dom"

import DocumentsView from "./views/DocumentsView"
import EditorView from "./views/EditorView"
import SettingsView from "./views/SettingsView"
import ChangelogView from "./views/ChangelogView"
import FeedbackView from "./views/FeedbackView"
import LoginView from "./views/LoginView"

/** `View` component
 *
 * Renders a component from the `views` directory based on the path using react-router
 */
const View = () => {
  return (
    <div>
      <Route exact={true} path="/" component={DocumentsView} />
      <Route path="/editor/:id" component={EditorView} />
      <Route path="/settings" component={SettingsView} />
      <Route path="/changelog" component={ChangelogView} />
      <Route path="/feedback" component={FeedbackView} />
      <Route path="/login" component={LoginView} />
    </div>
  )
}

export default View
