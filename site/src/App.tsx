import { BrowserRouter as Router } from "react-router-dom"
import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"

import { SENTRY_DSN, VERSION } from "./config"

import Header from "./components/Header"
import Footer from "./components/Footer"
import View from "./View"

Sentry.init({
  dsn: SENTRY_DSN,
  release: "site@" + VERSION,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

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
