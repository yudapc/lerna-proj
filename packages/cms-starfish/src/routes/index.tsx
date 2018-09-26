import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageDashboard } from "../pages/page-dashboard";
import { PageStatistik } from "../pages/page-statistik";
import { PagePromo } from "../pages/page-promo";
import { PageUsers } from "../pages/page-users";

export class AppRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PageDashboard} />
          <Route path="/statistik" component={PageStatistik} />
          <Route path="/promo" component={PagePromo} />
          <Route path="/users" component={PageUsers} />
        </Switch>
      </Router>
    );
  }
}

export default AppRoute;
