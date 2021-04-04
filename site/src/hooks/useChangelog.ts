import { useEffect, useState } from "react"
import { fetchChangelog } from "../actions"

/** `useChangelog` hook
 * 
 * Fetches content using the `fetchChangelog` action and returns it
 */
const useChangelog = () => {
  const [changelog, setChangelog] = useState("")

  const loadChangelog = async () => setChangelog(await fetchChangelog())

  useEffect(() => {
    loadChangelog()
  }, [setChangelog])

  return changelog
}

export default useChangelog