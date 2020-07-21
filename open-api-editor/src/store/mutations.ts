import state from "./state";
import State from "@/constants/types/State";
import Verb from "@/constants/enums/Verb";

/** `mutations` Vuex Mutations */
const mutations = {
  /** `CREATE_SERVER` mutation
   *
   * Adds a new, empty server to the root servers object.
   */
  CREATE_SERVER: (state: State) => {
    state.servers.push({ url: "", description: "", variables: [] });
  },
  /** `CREATE_PATH` mutation
   *
   * Adds a new, empty path to the root paths object.
   */
  CREATE_PATH: (state: State) => {
    state.paths.push({});
  },
  /** `CREATE_OPERATION` mutation
   *
   * Adds a new, empty operation to a path.
   */
  CREATE_OPERATION: (state: State, operationOptions: { verb: Verb }) => {},
  /** `DELETE_SERVER` mutation */
  DELETE_SERVER: (state: State, index: number) => {
    state.servers.splice(index, 1);
  },
  /** `DELETE_PATH`
   *
   * Deletes the `path` object with the given unique `id`.
   */
  DELETE_PATH: (state: State, index: number) => {
    state.paths.splice(index, 1);
  },
  /** `UPDATE_TITLE` mutation
   *
   * Updates `info.title` to the `title` that is passed in.
   */
  UPDATE_TITLE: (state: State, title: string) => {
    state.info.title = title;
  },
  /** `UPDATE_DESCRIPTION` mutation
   *
   * Updates `info.description` to the `description` that is passed in.
   */
  UPDATE_DESCRIPTION: (state: State, description: string) => {
    state.info.description = description;
  },
  /** `UPDATE_VERSION` mutation */
  UPDATE_VERSION: (state: State, version: string) => {
    state.info.version = version;
  },
  /** `UPDATE_SERVER_URL` mutation
   *
   * Updates the `server[index].url` object with the matching index.
   */
  UPDATE_SERVER_URL: (state: State, input: { url: string; index: number }) => {
    state.servers[input.index].url = input.url;
  },
  /** `UPDATE_SERVER_DESCRIPTION` mutation
   *
   * Updates the `server[index].description` object with the matching index.
   */
  UPDATE_SERVER_DESCRIPTION: (
    state: State,
    input: { description: string; index: number }
  ) => {
    state.servers[input.index].description = input.description;
  },
  /** `UPDATE_PATH` mutation
   *
   * Updates the `path` object with the matching index.
   */
  UPDATE_PATH: (state: State, input: { path: any; index: number }) => {
    state.paths[input.index] = input.path;
  },
};

export default mutations;
