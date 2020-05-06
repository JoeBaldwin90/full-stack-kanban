import React from "react";
import { Router, Route, Redirect  } from "react-router-dom";
import { history } from "../store/history";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "../containers/ConnectedDashboard";
import { ConnectedNavigation } from "../containers/ConnectedNavigation";
import { ConnectedTaskDetail } from "../containers/ConnectedTaskDetail";
import { ConnectedLogin } from '../containers/ConnectedLogin';

const RouteGuard = Component => ({ match }) => {
  console.info("Route Guard: ", match);
  if (!store.getState().session.authenticated) {
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
