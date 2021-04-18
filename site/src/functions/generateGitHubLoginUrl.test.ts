import generateGitHubLoginUrl from "./generateGitHubLoginUrl"
import { GITHUB_OAUTH_URL, GITHUB_APP_CLIENT_ID } from "../config"

it("generates a GitHub login URL with given state", () => {
  // Given
  const state = "a1b2c3d4"

  const expected = `${GITHUB_OAUTH_URL}?client_id=${GITHUB_APP_CLIENT_ID}&state=${state}`

  // When
  const actual = generateGitHubLoginUrl(state).toString()

  // Then
  expect(actual).toEqual(expected)
})

export { }