import * as React from "react";
import "./product-image.scss";

interface Iprops {
  productImageUrl?: string;
}

export class ProductImageComponent extends React.Component<Iprops, any> {
  render() {
    const { productImageUrl } = this.props;
    return (
      <div className="bt-product-image">
        <img src={productImageUrl} />
      </div>
    );
  }
}

export default ProductImageComponent;
