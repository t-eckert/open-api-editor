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
    <article className="mx-auto mt-8 max-w-4xl">
      <ReactMarkdown className="markdown">{changelog}</ReactMarkdown>
    </article>
  )
}

export default ChangelogView
