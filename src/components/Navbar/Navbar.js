import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import "./navbar.styles.scss";
import logo from "../../assets/heinsberg_logo.jpg";

function Navbar() {
  const [state, setState] = useState({ collapse: false });
  const onClick = e => {
    setState({ ...state, collapse: !state.collapse });
  };
  return (
    <div>
      <header>
        <MDBNavbar className="navbar" dark expand="md" scrolling fixed="top">
          <MDBNavbarBrand href="/" className="logoImageContainer">
            <div className="swing">
              <img src={logo} class="mx-auto logoImage" alt="Heinsberg" />
            </div>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={onClick} />
          <MDBCollapse isOpen={state.collapse} navbar>
            <MDBNavbarNav right >
              <MDBNavItem >
                <MDBNavLink className="navbarLink historie" to="historie">Historie</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink className="navbarLink stadtplan" to="stadtplan">Stadtplan</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="navbarLink datenschutz"to="datenschutz">Datenschutz</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    </div>
  );
}

export default Navbar;
