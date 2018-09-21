import * as React from "react";
import { Button } from "@bmd/components";

export class HomePageComponent extends React.Component<any, any> {
  alert = () => {
    alert("kamu menekan tombol Klik Disini!");
  };
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Button className="btn-home" text="Klik Disini" onClick={this.alert} />
      </div>
    );
  }
}
export default HomePageComponent;
