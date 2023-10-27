/** @format */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo-no-background.png";
import { NavLink, Link } from "react-router-dom";

import "../styles/styles.css";
import { Text } from "@chakra-ui/react";

const NavigationBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      style={{ display: "flex", flexDirection: "row" }}
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      width="100vw"
      collapseOnSelect="true"
      sticky="true"
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link
            as={NavLink}
            to="home"
            onClick={() => scrollToSection("home")}
          >
            {/* <img
              src={logo}
              alt="personal logo"
              style={{ width: "3em", height: "auto" }}
              className="d-inline-block align-left"
            /> */}
            <Text
              as="h3"
              size='md'
              className="name"
            >
              Shruti Sharma
            </Text>
            {/* <Text as="span" fontSize={["sm", "md", "md"]}>
              Software Engineer | Computer Science B.S
            </Text> */}
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav id="nav-links" className="mr-auto nav-elements" style={{ justifySelf: "end" }}>
            <Nav.Link
              as={NavLink}
              to="about"
              onClick={() => scrollToSection("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="skills"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="experience"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="projects"
              onClick={() => scrollToSection("projects")}
            >
              Projects & Demos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="education"
              onClick={() => scrollToSection("education")}
            >
              Education History
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="blog"
              onClick={() => scrollToSection("blog")}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
