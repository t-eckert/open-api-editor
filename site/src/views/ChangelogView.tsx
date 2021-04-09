import ReactMarkdown from "react-markdown"

import { useChangelog, useScrollTo } from "../hooks"

const ChangelogView = (): JSX.Element => {
  const changelog = useChangelog()
  useScrollTo(0, 0)

  return (
    <article className="mx-auto mt-8 max-w-xl">
      {changelog && (
        <ReactMarkdown className="markdown p-6 rounded-xl bg-white shadow">
          {changelog}
        </ReactMarkdown>
      )}
    </article>
  )
}

export default ChangelogView
