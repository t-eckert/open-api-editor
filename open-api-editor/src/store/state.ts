/** `state` Vuex State */
const state = () => ({
  /** `doc` state
   *
   * The Open API document state.
   *
   * > Note: Values here are default values.
   */
  doc: {
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
    servers: [
      {
        url: "",
        description: "",
        variables: {},
      },
    ],
    paths: {},
    components: {},
    security: [],
    tags: [],
    externalDocs: {},
  },
});

export type RootState = ReturnType<typeof state>;

export default state;
