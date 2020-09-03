/** `OpenApiDoc` type
 *
 * This is not a direct port of the Open API Spec. It is a translation of the elements of the spec
 * to a form more easily used in the UI.
 *
 * For instance `paths`, which in the spec is an object of objects with the key's being strings identifying
 * the path name, here is a list of path-like objects with that can be transformed easily to the spec form.
 */
type OpenApiDoc = {
  /** `openapi` field
   *
   * This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI
   * document uses. The openapi field SHOULD be used by tooling specifications and clients to interpret the
   * OpenAPI document. This is not related to the API info.version string.
   */
  openapi: string;

  /** `info` field
   *
   * Provides metadata about the API. The metadata MAY be used by tooling as required.
   */
  info: Info;

  /** `servers` field
   *
   * An array of Server Objects, which provide connectivity information to a target server.
   * If the servers property is not provided, or is an empty array, the default value would
   * be a Server Object with a url value of /.
   */
  servers?: Server[];

  /** `paths` field
   *
   * The available paths and operations for the API.
   *
   * > In the original spec, this is an object of objects. Here it is an array of `Path` objects.
   * > This allows for easier CRUD manipulation of the objects from the UI.
   */
  paths: Path[];

  /** `components` field
   *
   * An array of schemas for the specification.
   */
  components?: Component;

  /** `security` field
   *
   * A declaration of which security mechanisms can be used across the API. The list of values includes
   * alternative security requirement objects that can be used. Only one of the security requirement
   * objects need to be satisfied to authorize a request. Individual operations can override this definition.
   * To make security optional, an empty security requirement ({}) can be included in the array.
   */
  security?: Security[];

  /** `tags` field
   *
   * A list of tags used by the specification with additional metadata. The order of the tags can be used to
   * reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be
   * declared. The tags that are not declared MAY be organized randomly or based on the tools' logic.
   * Each tag name in the list MUST be unique.
   */
  tags?: Tag[];

  /** `externalDocs` field
   *
   * Additional external documentation.
   */
  externalDocs?: ExternalDocs;
};

/** `Info` type
 *
 * Provides metadata about the API which may be used in clients if needed or presented in editing or
 * documentation generation tools.
 */
type Info = {
  title: string;
  description?: string;
  termsOfService?: URL;
  contact?: Contact;
  license?: License;
  version: string;
};

/** `Contact` type
 *
 * Contact information for the exposed API.
 */
type Contact = {
  /** `name` field
   *
   * The identifying name of the contact person/organization.
   */
  name?: string;

  /** `url` field
   *
   * The URL pointing to the contact information. MUST be in the format of a URL.
   */
  url?: URL;

  /** `email` field
   *
   * The email address of the contact person/organization. MUST be in the format of an email address.
   */
  email?: string;
};

/** `License` type
 *
 * License information for the exposed API.
 */
type License = {
  /** `name` field
   *
   * The license name used for the API.
   */
  name: string;
  /** `url` field
   *
   * A URL to the license used for the API. MUST be in the format of a URL.
   */
  url?: URL;
};

/** `Server` type
 *
 * An object representing a Server Variable for server URL template substitution.
 */
type Server = {
  /** `enum` field
   *
   * An enumeration of string values to be used if the substitution options are
   * from a limited set. The array SHOULD NOT be empty.
   */
  enum: string[];

  /** `default` field
   *
   * The default value to use for substitution, which SHALL be sent if an alternate
   * value is not supplied. Note this behavior is different than the Schema Object's
   * treatment of default values, because in those cases parameter values are optional.
   * If the enum is defined, the value SHOULD exist in the enum's values.
   */
  default: string;

  /** `description` field
   *
   * An optional description for the server variable. CommonMark syntax MAY be used
   * for rich text representation.
   */
  description?: string;
};

type Path = {};

type Component = {
  schemas?: Schemas;
};

type Schemas = {
  name: string;
  nullable: boolean;
  discriminator: Discriminator;
  readOnly: boolean;
};

type Discriminator = {};

type Security = {};

type Tag = {};

type ExternalDocs = {};
