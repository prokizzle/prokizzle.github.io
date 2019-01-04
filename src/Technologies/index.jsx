import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

export default class extends PureComponent {
  render() {
    const technologies = [
      { id: 0, name: "React.js", logo: "react" },
      { id: 1, name: "FontAwesome", logo: "font-awesome" },
      { id: 2, name: "HTML5", logo: "html5" },
      { id: 3, name: "SASS", logo: "sass" },
    ];
    return (
      <Container className="my-5">
        <h2>Technologies Used on This Page</h2>
        <Row>
          {technologies.map(({ name, id, logo }) => (
            <Col key={id}>
              <Card className="shadow my-2">
                <CardBody>
                  <FontAwesomeIcon icon={["fab", logo]} size="3x" />
                  <CardTitle>{name}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
