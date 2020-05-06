import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Box, Flex } from "rebass/styled-components";
import Gravatar from "react-gravatar";
import { map } from "ramda";
import styled from "styled-components";

const links = [
  { title: "LinkedIn", href: "http://linkedin.com/in/nickprokesch" },
  { title: "GitHub", href: "https://github.com/prokizzle" },
  {
    title: "Professional CV/Resume",
    href:
      "https://prokizzle-cv.s3.amazonaws.com/Nick_Prokesch_VisualCV_Resume.pdf"
  },
  { title: "My Medium Articles", href: "https://medium.com/@nprokesch" }
];

function App() {
  return (
    <Container>
      <Header>
        <h1>Nick Prokesch</h1>
        <h2>Front-end Web Developer</h2>
      </Header>
      <ProfileImage>
        <Gravatar email="nick@prokes.ch" size={200} />
      </ProfileImage>
      <Buttons>
        {map(
          ({ title, href }) => (
            <ButtonContainer>
              <Button href={href} width="100%" variant="primary">
                {title}
              </Button>
            </ButtonContainer>
          ),
          links
        )}
      </Buttons>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 1;
  text-align: center;
`;

const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
`;

const Buttons = styled.div`
  margin-top: 15px;
`;

const ButtonContainer = styled.div`
  padding: 5px;
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Button = styled.a`
  background-color: #007bc7;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  text-decoration: none;

  &:hover {
    background-color: inherit;
    border: 1px solid #007BC7;
    color: black;
  }

  @media only screen and (max-width: 480px) {
    width: 300px;
    max-width: 300px;
  }

  @media only screen and (min-width: 480px) {
    width: 400px;
    max-width: 400px;
  }
`;
