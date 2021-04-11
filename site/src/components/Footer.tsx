import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="h-96 bg-yellow-600 mx-auto pt-8">
      <div className="mx-auto max-w-5xl text-white">
        <p className="mb-2 font-medium">
          Open API Editor version <code>0.0.2</code>
        </p>
        <section className="grid grid-cols-3 gap-4">
          <div>
            <h2 className="font-medium mb-2">Links</h2>
            <ul className="leading-tight">
              <li>
                <Link className="hover:underline" to="/changelog">
                  Changelog
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/feedback">
                  Feedback
                </Link>
              </li>
              <li className="hover:underline">
                <a
                  href="https://github.com/t-eckert/open-api-editor/discussions"
                  target="_blank"
                  rel="noreferrer"
                >
                  Forum
                </a>
              </li>
              <li className="hover:underline">
                <a
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
