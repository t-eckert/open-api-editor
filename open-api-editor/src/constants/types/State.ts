type State = {
  openapi: string;
  info: {
    title: string;
    description: string;
    termsOfService?: string;
    contact?: {
      name?: string;
      url?: string;
      email?: string;
    };
    license?: {
      name?: string;
      url?: string;
    };
    version?: string;
  };
  servers: any[];
  paths: any[];
  components: any[];
  security: any[];
  tags: any[];
  externalDocs: {};
};

export default State;
