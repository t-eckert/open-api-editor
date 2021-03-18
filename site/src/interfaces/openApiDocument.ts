export interface OpenApiDocument {
  id: string

  title: string
  version: string
  description: string
  termsOfService?: string

  contactInformation?: {
    name?: string
    email?: string
    website?: string
  }

  license?: {
    name?: string
    url?: string
  }

  servers: {}[]
}