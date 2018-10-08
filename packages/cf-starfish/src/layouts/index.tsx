import * as React from "react";
import { Container, Row, Col } from 'reactstrap';

interface Iprops {
  children?: any;
}

export class LayoutBase extends React.Component<Iprops, any> {
  render() {
    const { children} = this.props;
    return (
      <div className="bt-body-wrapper">
        <div className="bt-page-wrapper">
          <Container fluid>
            {children}
          </Container>
        </div>
      </div>
    );
  }
}

export default LayoutBase;
