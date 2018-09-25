import * as React from "react";
import { Button } from "@bmd/components";

export class ButtonSample extends React.Component {
  render() {
    return (
      <div>
        <Button type="default">Default</Button>
        &nbsp;
        <Button type="primary">Primary</Button>
        &nbsp;
        <Button type="danger">Danger</Button>
        &nbsp;
        <Button type="primary" loading={true}>
          Save
        </Button>
        &nbsp;
        <Button type="danger" icon="poweroff">
          Power Off
        </Button>
      </div>
    );
  }
}
export default ButtonSample;
