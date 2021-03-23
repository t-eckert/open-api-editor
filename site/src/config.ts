export const CHANGELOG_URL = "https://raw.githubusercontent.com/t-eckert/open-api-editor/main/CHANGELOG.md"
export const GITHUB_APP_CLIENT_ID = "d2e20ee498c0e3d317fe"

const environment = process.env.NODE_ENV

let API: string
if ("production" === environment) {
  API = "https://api.openapieditor.com"
} else if ("development" === environment) {
  API = "http://localhost:7071"
} else {
  API = "http://localhost:7071"
}

export { API }