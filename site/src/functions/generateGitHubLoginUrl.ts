import { GITHUB_APP_CLIENT_ID, GITHUB_OAUTH_URL } from "../config"

const generateGitHubLoginUrl = (state: string): URL => {
  let url = new URL(GITHUB_OAUTH_URL)
  url.searchParams.set("client_id", GITHUB_APP_CLIENT_ID)
  url.searchParams.set("state", state)

  return url
}

export default generateGitHubLoginUrl