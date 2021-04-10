import { OpenApiDocument } from "../interfaces";
import { OpenApiVersion } from "../types";
import generateJson from "./generateJson";

import YAML from "yamljs"

const generateYaml = (document: OpenApiDocument, version: OpenApiVersion = "3.0.0"): string => {
  const json = generateJson(document, version)

  return YAML.stringify(json)
}

export default generateYaml