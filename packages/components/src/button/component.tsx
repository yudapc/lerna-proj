import { Button } from "antd";
import * as React from "react";

export class ButtonComponent extends React.Component<any, any> {
  public render() {
    return <Button {...this.props} />;
  }
}

export default ButtonComponent;
