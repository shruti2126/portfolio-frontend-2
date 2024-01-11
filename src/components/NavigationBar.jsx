/** @format */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo-no-background.webp";
import "../styles/styles.css";
import { Text } from "@chakra-ui/react";

const NavigationBar = () => {
  return (
    <Navbar
      id="nav"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      fixed="top"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link href="#home">
            <img
              src={logo}
              alt="personal logo"
              style={{ width: "2em", height: "auto", marginRight: "0.2em" }}
              className="d-inline-block align-left"
            />
            <Text
              as="span"
              fontSize={["sm", "md", "lg"]}
              mr="1em"
              className="brand"
            >
              Shruti | Software Developer
            </Text>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            id="nav-links"
            className="me-auto justify-content-end flex-grow-1 pe-3"
          >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
