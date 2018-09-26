import * as React from "react";
import { LayoutCms } from "../../layout";
import { TitlePage } from "../../components/title-page";

export class PagePromoComponent extends React.Component<any, any> {
  render() {
    return (
      <LayoutCms>
        <TitlePage>Promo</TitlePage>
      </LayoutCms>
    );
  }
}
export default PagePromoComponent;
