import State from "@/constants/types/State";

/** `state` Vuex State */
const state = (): State => ({
  openapi: "3.0.3",
  info: {
    title: "",
    description: "",
    termsOfService: "",
    contact: {
      name: "",
      url: "",
      email: "",
    },
    license: {
      name: "",
      url: "",
    },
    version: "",
  },
  servers: [{ url: "", description: "", variables: [] }],
  paths: [],
  components: [],
  security: [],
  tags: [],
  externalDocs: {},
});

export default state;
