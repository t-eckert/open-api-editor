interface User {
  id: string
  name: string
  email: string
  picture?: string
  isPro: boolean
  created: Date
  lastLogin: Date
  documentIds: string[]
  settingsId: string
}

export default User