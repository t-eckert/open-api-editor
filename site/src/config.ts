export const CHANGELOG_URL = "https://raw.githubusercontent.com/t-eckert/open-api-editor/main/CHANGELOG.md"
export const GITHUB_OAUTH_URL = "https://github.com/login/oauth/authorize"

const environment = process.env.NODE_ENV

let API: string
let GITHUB_APP_CLIENT_ID: string
if ("production" === environment) {
  API = "https://api.openapieditor.com/api"
  GITHUB_APP_CLIENT_ID = "c107f43307dff88c2d16"
} else if ("development" === environment) {
  API = "http://localhost:7071/api"
  GITHUB_APP_CLIENT_ID = "d2e20ee498c0e3d317fe"
} else {
  API = "http://localhost:7071/api"
  GITHUB_APP_CLIENT_ID = "d2e20ee498c0e3d317fe"
}

export { API, GITHUB_APP_CLIENT_ID }