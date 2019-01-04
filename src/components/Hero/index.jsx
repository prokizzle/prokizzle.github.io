import React, { PureComponent } from "react";
import { Badge, Col, Row } from "reactstrap";
import LazyHero from "react-lazy-hero";

export default class extends PureComponent {
  render() {
    const skills = [
      { id: 0, name: "react" },
      { id: 1, name: "redux" },
      { id: 2, name: "ruby on rails" },
      { id: 3, name: "javascript" },
      { id: 4, name: "CSS3" },
      { id: 5, name: "HTML5" },
    ];
    return (
      <LazyHero imageSrc="https://unsplash.it/2000/1000">
        <h1>Nick Prokesch</h1>
        <div className="text-center">
          <Row>
            <Col>
              {skills.map(skill => (
                <Badge key={skill.id} className="mr-1">
                  {skill.name}
                </Badge>
              ))}
            </Col>
          </Row>
        </div>
      </LazyHero>
    );
  }
}
