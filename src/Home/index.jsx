import React from "react";
import GlobalNav from "../GlobalNav";
import Hero from "../Hero";
import Projects from "../Projects";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GlobalNav {...this.props} />

        <Hero />

        <Projects />
      </div>
    );
  }
}

export default Home;
