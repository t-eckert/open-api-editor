import { Link } from "react-router-dom"

const DocumentPreview = () => {
  return (
    <div className="p-3 w-full md:w-44 h-15 md:h-60 flex flex-col items-end md:items-center justify-center rounded-b-md md:rounded-md bg-yellow-100">
      <Link
        className="font-medium text-yellow-500 shadow bg-white px-3 py-1 rounded-full hover:text-white hover:bg-yellow-500 focus transition"
        to="/editor/1"
      >
        + New
      </Link>
    </div>
  )
}

export default DocumentPreview
