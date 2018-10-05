import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PagePromo } from "../pages/page-promo";

export class AppRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PagePromo} />
        </Switch>
      </Router>
    );
  }
}

export default AppRoute;
