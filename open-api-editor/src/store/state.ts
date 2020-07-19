/** `state` Vuex State */
const state = () => ({
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
  servers: [],
  paths: [],
  components: [],
  security: [],
  tags: [],
  externalDocs: {},
});

export type RootState = ReturnType<typeof state>;

export default state;
