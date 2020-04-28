import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import { Router, Route } from "react-router";
import { history } from "../store/history";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path='/dashboard' render={() => <ConnectedDashboard />} />
        <Route exact path='/task/:id' render={() => <ConnectedTaskDetail />} />
      </div>
    </Provider>
  </Router>
);
