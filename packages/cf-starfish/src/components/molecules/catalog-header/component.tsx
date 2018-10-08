import * as React from "react";
import { Col } from 'reactstrap';
import "./catalog-header.scss";

interface Iprops {
  catalogHeaderTitle?: string;
  catalogHeaderDescription?: string;
}

export class CatalogHeaderComponent extends React.Component<Iprops, any> {
  render() {
    const { catalogHeaderTitle, catalogHeaderDescription } = this.props;
    return (
      <Col sm="12" className="bt-catalog-header">
        <h1 className="bt-typo-displaylarge bt-catalog-header__title">{catalogHeaderTitle}</h1>
        <p className="bt-catalog-header__description">{catalogHeaderDescription}</p>
        <a className="bt-catalog-header__tnc" href="#">Lihat Syarat & Ketentuan</a>
      </Col>
    );
  }
}

export default CatalogHeaderComponent;
