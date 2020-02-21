import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.style.scss";
import logo from "../../assets/heinsberg_logo.jpg";

function NewNavbar() {
  return (
    <div className="newnavbar">
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href="/" className="heartHeinsberg">
          <i class="fa fa-heart"></i> <span> </span> Heinsberg
        </Navbar.Brand>
        <Navbar.Brand href="/" className="logoImageContainer">
          <div className="swing">
            <img src={logo} className="mx-auto logoImage" alt="Heinsberg" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            color: "white",
            backgroundColor: "#FFBEC1",
            margin: "10px"
          }}
        />
        <Navbar.Collapse style={{ color: "white" }} id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{ color: "white" }} href="/historie">
              Historie
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/stadtplan">
              Stadtplan
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NewNavbar;
