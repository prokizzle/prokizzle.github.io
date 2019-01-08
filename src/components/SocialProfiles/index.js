import React, { PureComponent } from "react";
import { Card, CardBody, CardTitle, Col, Row, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class extends PureComponent {
  render() {
    const profiles = [
      { id: 0, name: "Github", logo: "github", url: "https://github.com/prokizzle" },
      { id: 1, name: "LinkedIn", logo: "linkedin", url: "https://github.com/prokizzle" },
      { id: 2, name: "Instagram", logo: "instagram", url: "https://github.com/prokizzle" },
      { id: 3, name: "StackOverflow", logo: "stack-overflow", url: "https://github.com/prokizzle" },
      { id: 4, name: "Medium", logo: "medium", url: "https://github.com/prokizzle" },
    ];
    return (
      <Container className="my-5">
        <div className="py-1">
          <h3>Where you can find me</h3>
        </div>
        <Row>
          {profiles.map(profile => (
            <Col key={profile.id}>
              <Card className="shadow my-1">
                <CardBody>
                  <FontAwesomeIcon icon={["fab", profile.logo]} size="3x" />
                </CardBody>
                <CardTitle>{profile.name}</CardTitle>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
