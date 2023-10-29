/** @format */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo-no-background.png";
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
      id="nav"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      width="100vw"
      fixed="top"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link
            as={NavLink}
            to="home"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logo}
              alt="personal logo"
              style={{ width: "2em", height: "auto", marginRight: "5px" }}
              className="d-inline-block align-left"
            />
            <Text
              as="span"
              fontSize={["sm", "md", "lg", "xl"]}
              className="name"
            >
              Software Engineer | B.S CS
            </Text>
            {/* <Text as="span" fontSize={["sm", "md", "md"]}>
              Software Engineer | Computer Science B.S
            </Text> */}
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav id="nav-links" className="me-auto">
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
            <Nav.Link
              as={Link}
              to="https://github.com/shruti2126/portfolio-frontend-2/tree/master"
              
            >
              Source Code for this Website
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
