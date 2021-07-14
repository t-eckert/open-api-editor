import React from "react";
import { BrowserRouter as Router } from "react-router-dom"

import View from "./components/View"

/** `App` component
 *
 * The root component for the React application 
 */
const App = () => {
  return <Router><View /></Router>
};

export default App;
