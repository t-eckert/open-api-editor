import License from "./types/License";

/** `licenses` array
 *
 * An array of licenses an API can implement.
 */
const licenses: License[] = [
  {
    Name: "Apache 2.0",
    Url: new URL("https://www.apache.org/licenses/LICENSE-2.0.html"),
    Description: "A description of the Apache 2.0 License",
  },
];

export default licenses;
