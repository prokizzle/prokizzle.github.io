import React, { PureComponent } from "react";

export default class extends PureComponent {
  render() {
    const projects = [];
    if (projects.length === 0) return <div />;
    return (
      <div>
        <h2>Projects</h2>
      </div>
    );
  }
}
