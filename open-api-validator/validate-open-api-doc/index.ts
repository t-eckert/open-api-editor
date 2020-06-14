import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Enforcer } from "openapi-enforcer";
const yaml = require("js-yaml");

/** Validate Open API Document
 *
 * Function type: `httpTrigger`
 *
 * Validates an Open API document parsed from the body and returns a list of
 * issues with the document if they exist.
 */
const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const document = req.body;

  if (!document) {
    context.res = {
      status: 400,
      body: "Please pass a body on the request.",
    };
  }

  const contentType = req.headers["content-type"] || "text/yaml";
  context.log(contentType);

  const doc = contentType === "text/yaml" ? yaml.safeLoad(document) : document;

  await Enforcer(doc, { fullResult: true }).then(function ({ error, warning }) {
    if (!error) {
      context.log("No errors with your document");
      if (warning) {
        context.log(warning);
        context.res = {
          status: 200,
          body: warning,
        };
      }
    } else {
      context.log(error);
      context.res = {
        status: 200,
        body: error,
      };
    }
  });
};

export default httpTrigger;
