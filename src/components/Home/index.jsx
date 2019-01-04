import React, { PureComponent } from "react";
import GlobalNav from "../GlobalNav";
import Hero from "../Hero";
import Projects from "../Projects";
import Technologies from "../Technologies";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <GlobalNav {...this.props} />

        <Hero />

        <Projects />
        <Technologies />
      </div>
    );
  }
}

export default Home;
