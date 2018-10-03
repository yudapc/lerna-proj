import * as React from "react";
import { Select } from 'antd';

export class SelectFilter extends React.Component {
  render() {

    const Option = Select.Option;
    
    return (
      <Select defaultValue="all" style={{ width: 150 }}>
        <Option value="all">All</Option>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    );
  }
}

export default SelectFilter;
