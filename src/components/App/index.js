import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import "bootstrap";

import "./App.scss";
import Home from "../Home";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Nick Prokesch</title>
        </Helmet>
        <Home />
      </div>
    );
  }
}

export default App;
