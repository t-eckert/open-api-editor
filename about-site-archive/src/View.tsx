import { Route } from "react-router-dom"

import HomepageView from "./views/HomepageView"
import DocumentView from "./views/DocumentView"

/** `View` component
 *
 * Renders a component from the `views` directory based on the path using react-router
 */
const View = () => {
  return (
    <>
      <Route exact path="/" component={HomepageView} />
      <Route exact path="/posts/:slug" component={DocumentView} />
    </>
  )
}

export default View
