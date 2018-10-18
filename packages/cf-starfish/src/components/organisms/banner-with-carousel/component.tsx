import * as React from "react";
import { ProductImage } from "../../atoms/product-image";
import { ProductName } from "../../atoms/product-name";
import { ProductPrice } from "../../atoms/product-price";
import Slider from "react-slick";

interface Iprops {
  productData?: any[];
  productCarouselTitle?: string;
  bannerImageUrl?: string;
  bannerLinkUrl?: string;
}

function SlickNextArrow(props) {
  const { onClick } = props;
  return (
  <button className="bt-product-carousel__nav bt-product-carousel__nav--next" onClick={onClick}>
    <span className="pt-icon-large pt-icon-chevron-right"></span>
  </button>
  );
}

function SlickPrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="bt-product-carousel__nav bt-product-carousel__nav--prev" onClick={onClick}>
      <span className="pt-icon-large pt-icon-chevron-left"></span>
    </button>
  );
}

function BannerItemCarousel(props) {
  const { bannerImageUrl, bannerLinkUrl } = props;
  return (
    <div className="bt-product-carousel__banner">
      <a href={bannerLinkUrl}>
        <img src={bannerImageUrl} />
      </a>
    </div>
  );
}

export class BannerWithCarouselComponent extends React.Component<Iprops, any> {

  render() {
    var settings = {
      infinite: true,
      variableWidth: true,
      nextArrow: <SlickNextArrow />,
      prevArrow: <SlickPrevArrow />
    };
    const { productData, productCarouselTitle, bannerImageUrl, bannerLinkUrl } = this.props;
    return (
      <div className="bt-product-carousel bt-section">
        <h3 className="bt-product-carousel__title bt-typo-displaylarge">{ productCarouselTitle }</h3>
        <div className="bt-product-carousel__withbanner">
          <BannerItemCarousel bannerImageUrl={bannerImageUrl} bannerLinkUrl={bannerLinkUrl} /> 
          <div className="bt-product-carousel__wrapper">
            <Slider {...settings}>
              {productData.map((product) => (
                <div className="bt-product-carousel__box" key={product.id}>
                  <a href={product.productLinkUrl}>
                    <ProductImage productImageUrl={product.productImageUrl} />
                    <ProductName productName={product.productName} />
                    <ProductPrice productPriceDiscount={product.productPriceDiscount} productPriceWeb={product.productPriceWeb} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default BannerWithCarouselComponent;
