export const GITHUB_OAUTH_URL = "https://github.com/login/oauth/authorize"
export const SENTRY_DSN = "https://edcad8a8d01c429b8be28ac2ba8d2737@o559088.ingest.sentry.io/5693462"
export const VERSION = process.env.npm_package_version

const environment = process.env.NODE_ENV

let API: string
let GITHUB_APP_CLIENT_ID: string
if ("production" === environment) {
  // Production configuration settings
  API = "https://api.openapieditor.com"
  GITHUB_APP_CLIENT_ID = "c107f43307dff88c2d16"
} else if ("development" === environment) {
  // Development (pre-production) configuration settings
  API = "http://localhost:7071"
  GITHUB_APP_CLIENT_ID = "d2e20ee498c0e3d317fe"
} else {
  // Test configuration settings
  API = "http://localhost:7071"
  GITHUB_APP_CLIENT_ID = "d2e20ee498c0e3d317fe"
}

export { API, GITHUB_APP_CLIENT_ID }