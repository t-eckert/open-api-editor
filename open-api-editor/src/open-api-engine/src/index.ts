import Suggestion from "./interfaces/Suggestion";
import suggestions from "./suggestions";
import { OpenAPIV3 } from "openapi-types";
export { OpenAPIV3 };

/** `process` function
 *
 * Parses the Open API document and returns a set of actions that can be taken to edit it.
 *
 * @param doc The Open API document to be analyzed
 *
 * > Why not `document`? `document` is already defined by default in JavaScript.
 */
export const process = async (doc: any): Promise<Suggestion[] | undefined> => {
  return hasOpenApiVersion(doc)
    ? [suggestions.editTheOpenApiVersion]
    : [suggestions.addAnOpenApiVersion];
};

const hasOpenApiVersion = (doc: any): boolean => Boolean(doc.openapi);
