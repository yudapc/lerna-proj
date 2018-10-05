import * as React from "react";
import { ProductImage } from "../../components/product-image";
import { ProductName } from "../../components/product-name";
import { ProductPrice } from "../../components/product-price";
import { Row, Col } from 'reactstrap';
import "./product-item.scss";

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

ProductItemComponent.defaultProps = {
  productItemType: 'bt-product-list',
}


export default ProductItemComponent;
