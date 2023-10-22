/** @format */

import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import scrollToSection from "../functions/scrollToSection";
import "../styles/navbar.css";

// function customLink({ Link, to, children }) {
// 	<Link to={to}>{children}</Link>
// }
const NavBar = () => {
  return (
    <nav className="navbar">
      <Text as="h2" size="2xl" color="white">
        {" "}
        Software Engineer | Computer Science B.S
      </Text>
      <div className="bar">
        <Link to="about">About</Link>
        <Link to="about">Skills</Link>
        <Link to="experience">Experience</Link>
        <Link to="education">Education</Link>
        <Link to="blog">Blog</Link>
        <Link to="projects">Project & Demos</Link>
        <Link to="contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
