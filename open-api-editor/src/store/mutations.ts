import state, { RootState } from "./state";
import Verb from "@/constants/enums/Verb";

/** `mutations` Vuex Mutations */
const mutations = {
  /** `CREATE_OPERATION` mutation
   *
   * Adds a new, empty operation to a path.
   */
  CREATE_OPERATION: (state: RootState, operationOptions: { verb: Verb }) => {},
  /** `SET_DOC` mutation
   *
   * Updates the `doc` in the state to the `doc` that is passed in.
   */
  SET_DOC: (state: RootState, doc: any) => {
    state.doc = doc;
  },
  /** `SET_TITLE` mutation
   *
   * Updates the `doc.info.title` to the `title` that is passed in.
   */
  SET_TITLE: (state: RootState, title: string) => {
    state.doc.info.title = title;
  },
};

export default mutations;
