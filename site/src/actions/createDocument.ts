import { API } from "../config"
import { OpenApiDocument } from "../interfaces/openApiDocument"

const createDocument = async (): Promise<any> /* Promise<OpenApiDocument | null>*/ => {
  const response = await fetch(API + "/documents", { method: "post" })

  return response.body
}

export default createDocument