import * as React from "react";
import { LayoutCms } from "../../layout";
import { TitlePage } from "../../components/title-page";

export class PageStatistikComponent extends React.Component<any, any> {
  render() {
    return (
      <LayoutCms>
        <TitlePage>Statistik</TitlePage>
      </LayoutCms>
    );
  }
}
export default PageStatistikComponent;
