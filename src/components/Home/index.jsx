import React, { PureComponent } from "react";
import GlobalNav from "../GlobalNav";
import Hero from "../Hero";
import Projects from "../Projects";
import Technologies from "../Technologies";
import SocialProfiles from "../SocialProfiles";
import EmploymentHistory from "../EmploymentHistory";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <GlobalNav {...this.props} />

        <Hero />

        <EmploymentHistory />
        <SocialProfiles />
        <Projects />
        <Technologies />
      </div>
    );
  }
}

export default Home;
