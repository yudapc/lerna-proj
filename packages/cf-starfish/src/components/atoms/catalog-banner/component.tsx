import * as React from "react";
import { Row } from 'reactstrap';

interface Iprops {
  bannerImageUrl?: string;
}

export class CatalogBannerComponent extends React.Component<Iprops, any> {
  render() {
    const { bannerImageUrl } = this.props;
    return (
      <Row className="justify-content-md-center">
        <div className="bt-catalog-banner">
          <img src={bannerImageUrl} />
        </div>
      </Row>
    );
  }
}

export default CatalogBannerComponent;
