import * as React from "react";
import { LayoutCms } from "../../layout";
import { TitlePage } from "../../components/title-page";

export class PageUsersComponent extends React.Component<any, any> {
  render() {
    return (
      <LayoutCms>
        <TitlePage>Users</TitlePage>
      </LayoutCms>
    );
  }
}
export default PageUsersComponent;
