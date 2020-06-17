import Vue from "vue";
import Vuex from "vuex";
import yaml from "js-yaml";
import axios from "axios";
import PaletteSuggestor from "@/paletteSuggestor";

const paletteSuggestor = new PaletteSuggestor({});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doc: "",
    suggestions: [],
    errors: [],
    warnings: [],
  },
  getters: {
    yamlDoc: (state) => {
      const a = yaml.safeDump(state.doc);
      return a;
    },
    jsonDoc: (state) => yaml.safeLoad(state.doc),
    suggestions: (state) => state.suggestions,
  },
  mutations: {
    SET_DOC: (state, doc) => {
      state.doc = doc;
    },
    SET_SUGGESTIONS: (state, suggestions) => {
      state.suggestions = suggestions;
    },
    SET_ERRORS: (state, errors) => {
      state.errors = errors;
    },
    SET_WARNINGS: (state, warnings) => {
      state.warnings = warnings;
    },
  },
  actions: {
    updateSuggestions: async (context) => {
      const suggestions = paletteSuggestor
        .updateDoc(context.getters["jsonDoc"])
        .suggest();
      context.commit("SET_SUGGESTIONS", suggestions);
    },
    updateMonitor: async (context) => {
      const reponse = await axios.post(
        "http://localhost:7071/api/validate-open-api-doc",
        context.getters["jsonDoc"],
        {
          headers: {
            "content-type": "application/json",
            origin: "http://localhost:8080/",
          },
        }
      );
      context.commit("SET_ERRORS", reponse.data);
    },
  },
});
