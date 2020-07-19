import state, { RootState } from "./state";
import Verb from "@/constants/enums/Verb";

/** `mutations` Vuex Mutations */
const mutations = {
  /** `CREATE_PATH` mutation
   *
   * Adds a new, empty path to the root paths object.
   */
  CREATE_PATH: (state: RootState, pathOptions: { id: string }) => {
    const paths = state.paths;
  },
  /** `CREATE_OPERATION` mutation
   *
   * Adds a new, empty operation to a path.
   */
  CREATE_OPERATION: (state: RootState, operationOptions: { verb: Verb }) => {},
  /** `DELETE_PATH`
   *
   * Deletes the `path` object with the given unique `id`.
   */
  DELETE_PATH: (state: RootState, id: string) => {
    console.log("Delete " + id);

    let paths = state.paths;
    const pathKeys = Object.keys(paths);

    // TODO 2020-07-16 t-eckert: Figure out this delete thing.

    for (let pathKey in pathKeys) {
    }
  },
  /** `UPDATE_TITLE` mutation
   *
   * Updates the `doc.info.title` to the `title` that is passed in.
   */
  UPDATE_TITLE: (state: RootState, title: string) => {
    state.info.title = title;
  },
  /** `UPDATE_PATH` mutation
   *
   * Updates the `doc.path` object with the matching id.
   */
  UPDATE_PATH: (state: RootState, pathOptions: { path: any; id: string }) => {
    // TODO 2020-07-17 t-eckert: fix the type of the `path
    throw "Not implemented!";
  },
};

export default mutations;
