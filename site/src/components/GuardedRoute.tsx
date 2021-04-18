import { Route } from "react-router-dom"

type Props = {
  exact?: boolean
  path: string
  component: any
  fallback: any
  isAuthenticated: boolean
}

const GuardedRoute = (props: Props) => {
  const { exact, path, component, fallback, isAuthenticated } = props

  return (
    <Route
      exact={exact}
      path={path}
      component={isAuthenticated ? component : fallback}
    />
  )
}

export default GuardedRoute
