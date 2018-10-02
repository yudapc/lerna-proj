import * as React from "react";
import { Input } from 'antd';


interface Iprops {
  TextPlacholder?: string;
}

export class TextSearchComponent extends React.Component<Iprops, any> {
  render() {
    const { TextPlacholder } = this.props;
    return (
      <Input placeholder={TextPlacholder} className="bt-cms-filter-text" />
    );
  }
}


TextSearchComponent.defaultProps = {
  TextPlacholder: 'Search...'
}

export default TextSearchComponent;
