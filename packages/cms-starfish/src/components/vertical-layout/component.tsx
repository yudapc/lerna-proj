import * as React from "react";
import { Row, Col } from 'antd';


interface Iprops {
  children?: any;
  labelText?: string;
}

export class VerticalLayoutGroupComponent extends React.Component<Iprops, any> {
  render() {
    const { children, labelText } = this.props;
    return (
    <Row gutter={16} className="bt-vertical-layout-group">
      <Col className="bt-vertical-layout-label" span={6}>{labelText}</Col>
      <Col className="bt-vertical-layout-value" span={18}>{children}</Col>
    </Row>
    );
  }
}


export default VerticalLayoutGroupComponent;
