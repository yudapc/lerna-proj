import { Breadcrumb, BreadcrumbItem } from "@bmd/components";
import * as React from "react";
import titleize from "titleize";
import { Link } from "react-router-dom";

export class BreadcrumbComponent extends React.Component {
  render() {
    const fullPath = window.location.pathname;
    const paths = fullPath.split("/");
    console.log("paths: ", paths);
    return (
      <Breadcrumb>
        {paths.map((path, pathIndex) => (
          <BreadcrumbItem key={`uniq-breadcrumb-${pathIndex}`}>
            <Link to={`/${path}`}>
              {path === "" && pathIndex === 0 ? "Dashboard" : titleize(path)}
            </Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    );
  }
}
export default BreadcrumbComponent;
