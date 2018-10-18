import * as React from "react";
import { Col } from 'reactstrap';

interface Iprops {
  bannerColumnLG?: string;
  bannerColumnMD?: string;
  bannerColumnXS?: string;
  bannerSize?: string;
  bannerImageUrl?: string;
  bannerLinkUrl?: string;
  bannerLinkTarget?: string;
}

export class ProductBannerComponent extends React.Component<Iprops, any> {
  render() {
    const { bannerColumnLG, bannerColumnMD, bannerColumnXS, bannerImageUrl, bannerLinkUrl, bannerLinkTarget } = this.props;
    return (
      <Col lg={bannerColumnLG} md={bannerColumnMD} xs={bannerColumnXS} className="bt-product-banner__item">
        <a href={bannerLinkUrl} target={bannerLinkTarget}>
          <img src={bannerImageUrl} />
        </a>
      </Col>
    );
  }
}

export default ProductBannerComponent;
