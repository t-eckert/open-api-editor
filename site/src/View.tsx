import { observer } from "mobx-react-lite"
import { Route } from "react-router-dom"

import { useUserStore } from "./hooks"

import GuardedRoute from "./components/GuardedRoute"
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
      <GuardedRoute
        exact={true}
        path="/"
        component={DocumentsView}
        fallback={SplashView}
        isAuthenticated={isAuthenticated}
      />
      <GuardedRoute
        path="/editor/:id"
        component={EditorView}
        fallback={SplashView}
        isAuthenticated={isAuthenticated}
      />
      <GuardedRoute
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
