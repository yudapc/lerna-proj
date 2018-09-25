import * as React from "react";
import { Icon } from "@bmd/components";

export class IconSample extends React.Component {
  render() {
    return (
      <div>
        <p>
          <span>Sample Icon:</span>
          &nbsp;&nbsp;
          <Icon type="rollback" theme="outlined" />
        </p>
      </div>
    );
  }
}
export default IconSample;
