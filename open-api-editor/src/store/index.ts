import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doc: {
      openapi: "3.0.3",
      info: {
        title: "",
      },
    },
  },
  getters: {},
  mutations: {
    SET_DOC: (state, doc) => {
      state.doc = doc;
    },
    SET_TITLE: (state, title) => {
      state.doc.info.title = title;
    },
  },
  actions: {},
});
