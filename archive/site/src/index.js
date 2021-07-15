import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from "react-query"
import { GraphQLClient } from "graphql-request"

import { API } from "./config"
import './index.css';
import App from './App';

const queryClient = new QueryClient()
const graphClient = new GraphQLClient(`${API}/graphql`)

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

export { graphClient }