import * as React from "react";
import { LayoutBase } from "../../layouts";
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

export class PageSitemapComponent extends React.Component<any, any> {
  render() {
    return (
      <LayoutBase>
        <Row className="justify-content-md-center">
          <Col lg="12">
            <ul className="bt-sitemap-list">
              <li>
                <Link to="/">Sitemap</Link>
              </li>
              <li>
                <Link to="/promo">Promo</Link>
              </li>
              <li>
                <Link to="/brand">Brand</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </LayoutBase>
    );
  }
}
export default PageSitemapComponent;
