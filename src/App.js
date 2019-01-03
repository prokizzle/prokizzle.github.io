import React, { PureComponent } from "react";
import "./App.scss";
import Home from "./Home";
import "bootstrap";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
