import * as React from "react";
import { Row, Col } from 'reactstrap';
import { ProductBanner } from "../../atoms/product-banner";
import { ProductItemBox } from "../../molecules/product-item-box";

interface Iprops {
  bannerData?: any[];
  productData?: any[];
  brandCategoryTitle?: string;
}

export class BannerWithSKUComponent extends React.Component<Iprops, any> {
  state = {
    windowHeight: undefined
  }

  handleResize = () => this.setState({
    windowHeight: document.getElementById('bannerCategory').clientHeight
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  render() {
    var boxHeight = {
      height: (this.state.windowHeight/2)-16 + `px`
    }
    const { bannerData, productData, brandCategoryTitle } = this.props;
    return (
      <div className="bt-brand-category bt-section">
        <h3 className="bt-brand-category__title bt-typo-displaylarge">{ brandCategoryTitle }</h3>
        <div className="bt-brand-category__wrapper">
          <Row>
            <Col lg="6" className="bt-brand-category__banner">
              <Row id="bannerCategory">
                {bannerData.map((banner) => (
                  <ProductBanner key={banner.id} bannerImageUrl={banner.bannerImageUrl} bannerLinkUrl={banner.bannerLinkUrl} bannerLinkTarget={banner.bannerLinkTarget} />
                ))}
              </Row>
            </Col>
            <Col lg="6" className="bt-brand-category__product">
              {productData.map((product) => (
                <ProductItemBox style={boxHeight} key={product.id} productLinkUrl={product.productLinkUrl} productImageUrl={product.productImageUrl} productName={product.productName} productPriceDiscount={product.productPriceDiscount} productPriceWeb={product.productPriceWeb} />
              ))}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default BannerWithSKUComponent;
