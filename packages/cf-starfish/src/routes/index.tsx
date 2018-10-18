import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageSitemap } from "../pages/page-sitemap";
import { PagePromo } from "../pages/page-promo";
import { PageBrand } from "../pages/page-brand";

export class AppRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PageSitemap} />
          <Route path="/promo" component={PagePromo} />
          <Route path="/brand" component={PageBrand} />
        </Switch>
      </Router>
    );
  }
}

export default AppRoute;
