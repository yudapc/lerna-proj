import { Icon } from "antd";
import * as React from "react";

export class IconComponent extends React.Component<any, any> {
  public render() {
    return <Icon {...this.props} />;
  }
}

export default IconComponent;
