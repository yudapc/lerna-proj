import * as React from "react";
import "./product-name.scss";

interface Iprops {
  productName?: string;
}

export class ProductNameComponent extends React.Component<Iprops, any> {
  render() {
    const { productName } = this.props;
    return (
      <div className="bt-product-title">
        <p className="bt-typo-heading bt-product-title__name">{productName}</p>
      </div>
    );
  }
}

export default ProductNameComponent;
