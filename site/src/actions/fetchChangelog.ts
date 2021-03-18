import { CHANGELOG_URL } from "../config"

const fetchChangelog = async (): Promise<string> => {
  const response = await fetch(CHANGELOG_URL)

  return response.text()
}

export default fetchChangelog