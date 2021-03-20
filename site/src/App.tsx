import { BrowserRouter as Router } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import View from "./View"

const App = () => {
  return (
    <Router>
      <div id="page-top" />
      <div className="bg-yellow-50 min-h-screen overflow-x-hidden">
        <Header />
        <View />
      </div>
      <Footer />
      <div id="page-bottom" />
    </Router>
  )
}

export default App
