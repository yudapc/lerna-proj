import * as React from "react";
import { ProductImage } from "../../atoms/product-image";
import { ProductName } from "../../atoms/product-name";
import { ProductPrice } from "../../atoms/product-price";
import { Row, Col } from 'reactstrap';

interface Iprops {
  productData?: any[];
  productItemType?: string;
}

export class ProductItemComponent extends React.Component<Iprops, any> {

  render() {
    const { productData, productItemType } = this.props;
    return (
      <Row noGutters>
        {productData.map((product) => (
          <Col lg="3" md="3" className="bt-product-item" key={product.id}>
            <a href="#">
              <ProductImage productImageUrl={product.productImageUrl} />
              <ProductName productName={product.productName} />
              <ProductPrice productPriceDiscount={product.productPriceDiscount} productPriceWeb={product.productPriceWeb} />
            </a>
          </Col>
        ))}
      </Row>
    );
  }
}


export default ProductItemComponent;
