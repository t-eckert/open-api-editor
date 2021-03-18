// import { API } from "../config"
import { OpenApiDocument } from "../interfaces/openApiDocument"

const saveDocument = async (document: OpenApiDocument): Promise<any> /*Promise<OpenApiDocument | null>*/ => {
  // const response = await fetch(API + "/documents", { method: "put", body: JSON.stringify(document) })

  return null // response.body
}

export default saveDocument