import * as React from "react";
import { LayoutCms } from "../../layout";
import { TitlePage } from "../../components/title-page";
import { TableSample } from "./libraries/TableSample";
import { ButtonSample } from "./libraries/ButtonSample";
import { IconSample } from "./libraries/IconSample";

export class PageDashboardComponent extends React.Component<any, any> {
  render() {
    return (
      <LayoutCms>
        <TitlePage>Dashboard</TitlePage>
        <IconSample />
        <ButtonSample />
        <TableSample />
      </LayoutCms>
    );
  }
}
export default PageDashboardComponent;
