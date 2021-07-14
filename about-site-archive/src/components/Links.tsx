import { Link } from "react-router-dom"

type Props = {
  className?: string
}

const Links = ({ className }: Props) => {
  return (
    <section className={className}>
      <h2 className="text-2xl mb-2">Links</h2>
      <div className="flex flex-col ">
        <a
          className="font-medium hover:text-yellow-700 hover:underline transition"
          href="https://www.openapieditor.com"
        >
          Open API Editor
        </a>
        <a
          className="font-medium hover:text-yellow-700 hover:underline transition"
          href="https://github.com/t-eckert/open-api-editor"
        >
          Repository
        </a>
        <Link
          className="font-medium hover:text-yellow-700 hover:underline transition"
          to="/specification"
        >
          Project specification
        </Link>
        <a
          className="font-medium hover:text-yellow-700 hover:underline transition"
          href="https://github.com/t-eckert/open-api-editor/discussions"
        >
          Forum
        </a>
      </div>
    </section>
  )
}

export default Links
