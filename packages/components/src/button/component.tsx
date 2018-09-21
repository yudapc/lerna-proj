import * as React from "react";

interface Iprops {
  text?: string;
  className?: string;
  data?: string;
  id?: string;
  key?: string;
  onClick?: any;
}

export class ButtonComponent extends React.Component<Iprops, any> {
  public render() {
    return <button {...this.props}>{this.props.text}</button>;
  }
}

export default ButtonComponent;
