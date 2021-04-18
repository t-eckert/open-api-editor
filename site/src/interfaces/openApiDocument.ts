import User from "./user";

interface Info {
  title: string
}

interface Server { }

interface Paths { }

interface Components { }

interface Security { }

interface Tag { }

interface ExternalDocs { }

interface OpenApiDocument {
  _id: { $oid: string }

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