import { API } from "../config"
import { OpenApiDocument } from "../interfaces"

/** saveDocument `action`
 * 
 * Issues a PUT request against the /documents route in the API and returns the response
 */
const saveDocument = async (document: OpenApiDocument): Promise<any> =>
  await fetch(API + "/documents", { method: "put", body: JSON.stringify(document) })


export default saveDocument