interface User {
  id: string
  email: string
  name: string
  picture?: string
  isPro: boolean
  documentIds: string[]
  settingsId: string
}

export default User