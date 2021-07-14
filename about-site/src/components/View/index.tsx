import React from "react"
import { Route } from "react-router-dom"

import { HomepageView, PostView } from "../../views"

/** `View` component
 * 
 * Renders a component from the `views` directory based on the path using react-router
 */
const View = () => {
	return <>
		<Route exact path="/" component={HomepageView} />
		<Route exact path="/post/:id" component={PostView} />
  </>	
}

export default View