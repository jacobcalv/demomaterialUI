import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import {BrowserRouter} from "react-router-dom"

import App from "./App";


import configureStore, { history } from "./configureStore";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
