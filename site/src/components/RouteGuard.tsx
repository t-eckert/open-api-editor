import { Route } from "react-router-dom"

type Props = {
  exact?: boolean
  path: string
  component?: any
  fallback?: any
  isAuthenticated: boolean
  render?: any
  children?: any
}

const RouteGuard = (props: Props) => {
  const {
    exact,
    path,
    component: Component,
    fallback: Fallback,
    isAuthenticated,
  } = props

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Fallback />
      }
    />
  )
}

export default RouteGuard
