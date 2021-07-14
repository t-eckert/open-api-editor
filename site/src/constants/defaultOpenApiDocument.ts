import { OpenApiDocument } from "../interfaces";

const defaultOpenApiDocument: OpenApiDocument = {
  _id: { $oid: "a867b112-85ac-4bb0-86e1-0a6c6f555e0c" },
  authors: [],
  isDeleted: false,
  info: {
    title: "Test", version: "1.0.0", termsOfService: "", description: "Description"
  },
}

export default defaultOpenApiDocument