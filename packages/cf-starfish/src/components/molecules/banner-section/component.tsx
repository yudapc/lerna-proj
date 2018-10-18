import * as React from "react";
import { Row } from 'reactstrap';

interface Iprops {
  children?: any;
  bannerSize?: string;
}

export class BannerSectionComponent extends React.Component<Iprops, any> {

  render() {
    const { children, bannerSize } = this.props;
    return (
      <div className="bt-product-banner bt-section">
        <div className="bt-product-banner__wrapper">
          <Row className={bannerSize}>
            { children }
          </Row>
        </div>
      </div>
    );
  }
}

export default BannerSectionComponent;
