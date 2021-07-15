import { GITHUB_APP_CLIENT_ID, GITHUB_OAUTH_URL } from "../config"

/** `generateGitHubLoginUrl` function
 * 
 * @param state a randomly generated string used to verify all OAuth actions originated from the same source
 * @returns a URL which can be visted to begin the login with GitHub flow
 */
const generateGitHubLoginUrl = (state: string): URL => {
  let url = new URL(GITHUB_OAUTH_URL)
  url.searchParams.set("client_id", GITHUB_APP_CLIENT_ID)
  url.searchParams.set("state", state)

  return url
}

export default generateGitHubLoginUrl