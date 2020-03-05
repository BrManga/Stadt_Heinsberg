import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.style.scss";
import logo from "../../assets/heinsberg_logo.jpg";
import { Link } from "react-router-dom";

function NewNavbar() {
  return (
    <div className="newnavbar">
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href="/" className="heartHeinsberg">
          <i className="fa fa-heart"></i> <span> </span> Heinsberg
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
            <Nav style={{ color: "white" }}>
              <Link to="/historie">Historie</Link>
            </Nav>
            <Nav style={{ color: "white" }}>
              <Link to="/stadtplan">Stadtplan</Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NewNavbar;
