/** @format */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo-no-background.png";
import "../../styles/styles.css";
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
          <Nav.Link href="/">
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
            <Nav.Link href="#projects">Projects & Demos</Nav.Link>
            <Nav.Link href="#education">Education History</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
