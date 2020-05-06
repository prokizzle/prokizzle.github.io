import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Button, Box, Flex } from "rebass/styled-components";
import Gravatar from "react-gravatar";
import { map } from "ramda";

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
    <Flex justifyContent="center" width="100vw" px={1}>
      <Box justifyContet="center" width="100vw">
        <Flex
          width="100vw"
          height="100vh"
          alignItems="center"
          flexDirection="column"
        >
          <Box textAlign="center" alignItems="center">
            <Box>
              <h1>Nick Prokesch</h1>
            </Box>
            <Box>
              <h2>Front-end Web Developer</h2>
            </Box>
          </Box>
          <Box justifyContent="center">
            <Gravatar email="nick@prokes.ch" size={200} />
          </Box>
          {map(
            ({ title, href }) => (
              <Box width={["100%", "400px"]} py={2}>
                <Link href={href}>
                  <Button width="100%" variant="primary">
                    {title}
                  </Button>
                </Link>
              </Box>
            ),
            links
          )}
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
