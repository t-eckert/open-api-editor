import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

import { fetchChangelog } from "../actions"

const ChangelogView = (): JSX.Element => {
  const [changelog, setChangelog] = useState("")

  useEffect(() => {
    const loadChangelog = async () => {
      setChangelog(await fetchChangelog())
    }
    loadChangelog()
  }, [setChangelog])

  return (
    <article className="mx-auto mt-8 max-w-xl">
      {changelog ? (
        <ReactMarkdown className="markdown p-6 rounded-xl bg-white shadow">
          {changelog}
        </ReactMarkdown>
      ) : (
        <div></div>
      )}
    </article>
  )
}

export default ChangelogView
