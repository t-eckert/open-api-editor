import Priority from "./enums/Priority";

/** `suggestions`
 *
 * Each suggestion is something that can be done to edit the Open API document. The
 */
const suggestions = {
  addAnOpenApiVersion: {
    id: 0,
    message:
      "Add the version of the Open API specification you are targeting. " +
      "If this is a new API, you should target the latest version, 3.0.3. ",
    documentation: {
      url: "https://swagger.io/specification/#versions",
      text: "Read more about the Open API specification versions.",
    },
    priority: Priority.Required,
  },
  editTheOpenApiVersion: {
    id: 1,
    message: "You are targeting Open API version {0}. {1}",
    documentation: {
      url: "https://swagger.io/specification/#versions",
      text: "Read more about the Open API specification versions.",
    },
    priority: Priority.Optional,
  },
};

export default suggestions;
