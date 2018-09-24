import { Breadcrumb, BreadcrumbItem } from "@bmd/components";
import * as React from "react";

export class BreadcrumbComponent extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>
          <a href="">Application Center</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="">Application List</a>
        </BreadcrumbItem>
        <BreadcrumbItem>An Application</BreadcrumbItem>
      </Breadcrumb>
    );
  }
}
export default BreadcrumbComponent;
