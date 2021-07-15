import { Link } from "react-router-dom"
import { OpenApiDocument } from "../../interfaces"

type Props = {
  document: OpenApiDocument
}

const classes = [
  "z-10 p-3 flex bg-white shadow justify-between transition focus", // Both widths
  "w-full h-15 flex-row items-center border-b border-yellow first:rounded-t-md last:border-none", // Small width
  "md:w-44 md:h-60 md:flex-col md:items-start md:border-none md:shadow md:rounded-md md:hover:shadow-xl", // Large width
].join(" ")

const DocumentPreview = (props: Props) => {
  return (
    <Link className={classes} to={"/editor/" + props.document._id.$oid}>
      <div>
        <h2 className="font-medium">{props.document.info.title}</h2>
      </div>
      <div className="font-medium rounded text-yellow-500 hover:text-yellow-600 focus focus:ring-offset-2 transition">
        Open
      </div>
    </Link>
  )
}

export default DocumentPreview
