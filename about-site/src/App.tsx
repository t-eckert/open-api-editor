import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter as Router } from "react-router-dom"

import View from "./View"

const queryClient = new QueryClient()

/** `App` component
 *
 * The root component for the React application
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <View />
      </Router>
    </QueryClientProvider>
  )
}

export default App
