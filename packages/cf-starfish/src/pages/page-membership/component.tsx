import * as React from "react";
import { LayoutCms } from "../../layout";
import { TitlePage } from "../../components/title-page";

export class PageMembershipComponent extends React.Component<any, any> {
  render() {
    return (
      <LayoutCms>
        <TitlePage>Membership</TitlePage>
      </LayoutCms>
    );
  }
}
export default PageMembershipComponent;
