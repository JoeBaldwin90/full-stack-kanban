import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import { ConnectedLogin } from './Login';
import { Router, Route, Redirect  } from "react-router-dom";
import { history } from "../store/history";

const RouteGuard = Component => ({ match }) => {
  console.info("Route Guard: ", match);
  if (!store.getState().session.isAuthenticated) {
    console.log("**** Not Authenticated ****")
    return <Redirect to="/login"/>
  } else {
    return <Component match={match} />
  }
}

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path='/login' component={ConnectedLogin} />
        <Route exact path='/dashboard' render={RouteGuard(ConnectedDashboard)} />
        <Route
          exact
          path='/task/:id'
          render={RouteGuard(ConnectedTaskDetail)} />
      </div>
    </Provider>
  </Router>
);
