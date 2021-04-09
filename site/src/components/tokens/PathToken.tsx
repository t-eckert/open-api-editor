import { Link } from "react-router-dom"

const PathToken = () => {
  return <Title />
}

const Title = () => (
  <div className="flex flex-row justify-start items-center gap-2 z-10 py-1.5 font-medium text-sm">
    <img className="h-5 w-5" src="/logo.png" alt="Open API Editor logo" />
    <h1>
      <Link className="transition focus focus:ring-offset-2 rounded-sm" to="/">
        Open API Editor
      </Link>
    </h1>
  </div>
)

export default PathToken
