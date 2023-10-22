/** @format */

import { Box, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import "../styles/styles.css";

const NavBar = () => {
  return (
    <Box display="flex" flexDir="column" className="navbar">
      <Text as="h1"> Software Engineer | Computer Science B.S</Text>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Education</li>
        <li>Blog</li>
        <li>Project & Demos</li>
        <li>Contact</li>
      </ul>
    </Box>
  );
};
