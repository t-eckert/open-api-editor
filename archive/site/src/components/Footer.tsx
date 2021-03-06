import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="h-80 px-2 pt-2 sm:pt-8 bg-yellow-600 mx-auto">
      <div className="mx-auto max-w-5xl text-white">
        <p className="mb-2 font-medium">
          Open API Editor version <code>0.0.3</code>
        </p>
        <section className="grid grid-cols-3 gap-4">
          <div>
            <h2 className="font-medium mb-1">Links</h2>
            <ul className="leading-tight">
              <li>
                <Link className="hover:underline focus" to="/changelog">
                  Changelog
                </Link>
              </li>
              <li>
                <Link className="hover:underline focus" to="/feedback">
                  Feedback
                </Link>
              </li>
              <li className="hover:underline">
                <a
                  className="focus"
                  href="https://github.com/t-eckert/open-api-editor/discussions"
                  target="_blank"
                  rel="noreferrer"
                >
                  Forum
                </a>
              </li>
              <li className="hover:underline">
                <a
                  className="focus"
                  href="https://github.com/t-eckert/open-api-editor"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
