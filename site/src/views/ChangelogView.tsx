import ReactMarkdown from "react-markdown"

import { useChangelog, useScrollTo } from "../hooks"

/** ChangelogView `component`
 *
 * Renders an article with the changelog loaded from GitHub
 * Mapped to /changelog route
 */
const ChangelogView = (): JSX.Element => {
  const {
    data: { changelog },
    status,
    error,
  } = useChangelog()
  useScrollTo(0, 0)

  return (
    <article className="mx-auto mt-8 max-w-xl">
      {status === "success" ? (
        <ReactMarkdown className="markdown p-6 rounded-xl bg-white shadow">
          {changelog}
        </ReactMarkdown>
      ) : status === "error" ? (
        <section>Could not </section>
      )}
    </article>
  )
}

export default ChangelogView
