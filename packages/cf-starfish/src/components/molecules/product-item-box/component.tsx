import * as React from "react";
import { ProductImage } from "../../atoms/product-image";
import { ProductName } from "../../atoms/product-name";
import { ProductPrice } from "../../atoms/product-price";
import { Col } from 'reactstrap';

interface Iprops {
  productImageUrl?: string;
  productName?: string;
  productPriceDiscount?:string;
  productPriceWeb?:string;
  productLinkUrl?:string;
  style?: any
}
export class ProductItemBoxComponent extends React.Component<Iprops, any> {

  render() {
    const { productImageUrl, productName, productPriceDiscount, productPriceWeb, productLinkUrl, style } = this.props;
    return (
      <div className="bt-product-box">
        <a href={productLinkUrl} style={style}>
          <ProductImage productImageUrl={productImageUrl} />
          <ProductName productName={productName} />
          <ProductPrice productPriceDiscount={productPriceDiscount} productPriceWeb={productPriceWeb} />
        </a>
      </div>
    );
  }
}

export default ProductItemBoxComponent;
