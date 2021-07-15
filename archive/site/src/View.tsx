import { observer } from "mobx-react-lite"
import { Route } from "react-router-dom"

import { useUserStore } from "./hooks"

import RouteGuard from "./components/RouteGuard"
import SplashView from "./views/SplashView"
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
const View = observer(() => {
  const userStore = useUserStore()

  const isAuthenticated = userStore.isAuthenticated()

  return (
    <>
      <RouteGuard
        exact={true}
        path="/"
        component={DocumentsView}
        fallback={SplashView}
        isAuthenticated={isAuthenticated}
      />
      <RouteGuard
        path="/editor/:id"
        component={EditorView}
        fallback={SplashView}
        isAuthenticated={isAuthenticated}
      />
      <RouteGuard
        path="/settings"
        component={SettingsView}
        fallback={SplashView}
        isAuthenticated={isAuthenticated}
      />
      <Route path="/changelog" component={ChangelogView} />
      <Route path="/feedback" component={FeedbackView} />
      <Route path="/login" component={LoginView} />
    </>
  )
})

export default View
