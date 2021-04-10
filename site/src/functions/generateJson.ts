import formatters from "../formatters"
import { OpenApiDocument } from "../interfaces"
import { OpenApiVersion } from "../types"


const generateJson = (openApiDocument: OpenApiDocument, version: OpenApiVersion = "3.0.0"): string => {

  const formatter = formatters.get(version)

  if (!formatter) {
    throw Error(`No formatter found for verison ${version}`)
  }

  return formatter(openApiDocument)
}

export default generateJson