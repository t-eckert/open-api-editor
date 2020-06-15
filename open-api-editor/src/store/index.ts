import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doc: {},
    suggestions: [],
    errors: [],
    warnings: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
