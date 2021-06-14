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
      <Route path="/" component={HomepageView} />
      <Route path="/:id" component={DocumentView} />
    </>
  )
}

export default View
