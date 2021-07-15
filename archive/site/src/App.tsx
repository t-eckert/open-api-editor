import { BrowserRouter as Router } from "react-router-dom"
import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"

import { SENTRY_DSN, VERSION } from "./config"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Alerts from "./components/alerts/Alerts"
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
      <div className="w-full py-1 bg-yellow-700 font-medium text-center text-white">
        Open API Editor is still in alpha (0.0.3). You can follow updates in the{" "}
        <a
          className="underline focus"
          href="https://github.com/t-eckert/open-api-editor"
        >
          repository
        </a>
        .
      </div>
      <Alerts />
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
