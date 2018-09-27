import "antd/dist/antd.css";
import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

import { Button } from "bmdcomponents";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary">Primary</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="danger">Danger</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="danger" loading={true}>
          Loading
        </Button>
      </div>
    );
  }
}

export default App;
