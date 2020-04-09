import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from  'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from "apollo-link-error";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NetworkStatus } from './NetworkStatus';

// Create a custom event for network error
var event = new CustomEvent('network-error');

const errorLink = onError(({ networkError }) => {
  if (networkError && networkError.statusCode === 401) {  
    console.log("statuscode");
  } else if (networkError) {  
    // Trigger the custom event when network error occurs
    document.dispatchEvent(event);
    throw networkError;
  }
});

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <NetworkStatus />
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
