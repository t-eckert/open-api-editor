export interface User {
  id: string
  email: string
  name: string
  profileIcon?: string // TODO 2020-03-17 should this be a URL type? It's a URL...
  isPro: boolean
}