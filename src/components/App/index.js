import React, { PureComponent } from "react";
import "bootstrap";

import "./App.scss";
import Home from "../Home";

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
