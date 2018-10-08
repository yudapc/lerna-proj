import * as React from "react";
import { ProductImage } from "../../atoms/product-image";
import { ProductName } from "../../atoms/product-name";
import { ProductPrice } from "../../atoms/product-price";
import { Row, Col, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

interface Iprops {
  productData?: any[];
  productItemType?: string;
}

export class ProductItemComponent extends React.Component<Iprops, any> {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const { productData, productItemType } = this.props;
    return (
      <Row noGutters>
        {productData.map((product) => (
          <Col lg="3" md="3" className="bt-product-item" key={product.id} onClick={this.toggle} id="Popover1">
            <a href="#">
              <ProductImage productImageUrl={product.productImageUrl} />
              <ProductName productName={product.productName} />
              <ProductPrice productPriceDiscount={product.productPriceDiscount} productPriceWeb={product.productPriceWeb} />
            </a>
          </Col>
        ))}
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </Row>
    );
  }
}

ProductItemComponent.defaultProps = {
  productItemType: 'bt-product-list',
}


export default ProductItemComponent;
