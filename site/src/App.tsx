import { BrowserRouter as Router } from "react-router-dom"
import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"

import { SENTRY_DSN, VERSION } from "./config"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Statuses from "./components/Statuses"
import View from "./View"

// Sentry is used for error and performance monitoring
Sentry.init({
  dsn: SENTRY_DSN,
  release: "site@" + VERSION,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

/** `App` component
 *
 * The root component of the React application
 */
const App = () => {
  return (
    <Router>
      <div id="page-top" />
      <Statuses />
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
