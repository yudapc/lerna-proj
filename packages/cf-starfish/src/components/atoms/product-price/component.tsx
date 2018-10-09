import * as React from "react";
import "./product-price.scss";

interface Iprops {
  productPriceDiscount?: string;
  productPriceWeb?: string;
}

export class ProductPriceComponent extends React.Component<Iprops, any> {
  render() {
    const { productPriceDiscount, productPriceWeb } = this.props;
    return (
      <div className="bt-product-price">
        <p className="bt-typo-caption bt-product-price__discount">
          <del>{productPriceDiscount}</del>
        </p>
        <p className="bt-typo-heading bt-product-price__web">{productPriceWeb}</p>
      </div>
    );
  }
}

export default ProductPriceComponent;