import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <div className="bg-black">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="/r.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="./ProjectPage">Projects</Nav.Link>
                <Nav.Link href="./About">About me</Nav.Link>
                <Nav.Link href="./contact">Contact me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
