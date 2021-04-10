import User from "./user";

interface Info { }

interface Server { }

interface Paths { }

interface Components { }

interface Security { }

interface Tag { }

interface ExternalDocs { }

interface OpenApiDocument {
  id: string

  authors: User[]

  isDeleted: boolean

  info: Info
  servers: Server[]
  paths: Paths
  components: Components
  security: Security[]
  tags: Tag[]
  externalDocs: ExternalDocs
}

export default OpenApiDocument