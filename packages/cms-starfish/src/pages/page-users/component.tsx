import * as React from "react";
import { LayoutCms } from "../../layout";
import { TitlePage } from "../../components/title-page";
import { TableSample } from "./libraries/TableSample";
import { CardFilter } from "./libraries/CardFilter";

export class PageUsersComponent extends React.Component<any, any> {
  render() {

    document.body.classList.add('bt-cms-content--cardtable');
    return (
      <LayoutCms classCMSContent="bt-contentapalah">
        <TitlePage>Users</TitlePage>
        <CardFilter />
        <TableSample />
      </LayoutCms>
    );
  }
}
export default PageUsersComponent;
