import "../../homepage/HomePage.css";
import "./MainNavigation.css";

import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import admin_logo from "../../images/admin_images/admin_logo.png";
import customer_logo from "../../images/user_images/user_logo.png";

export default function MainNavigation(props) {
  return (
    // <Container fluid>
    // </Container>
    <Navbar className="nav-background-color px-3" expand="lg">
      <Navbar.Brand href="#home">
        <Link to="/" className="text-decoration-none pentkart-heading">
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/09/64/42/1000_F_209644258_XrzwkWRHDFfVejBcpXuwTbXOrUGD74EU.jpg"
            className="img-logo"
            alt="React Bootstrap logo"
          />{" "}
          PentKART
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link
            className="navigation-bar-items mx-4"
            href="#about-us-section"
          >
            About Us
          </Nav.Link>

          <Nav.Link
            className="navigation-bar-items mx-4"
            href="#contact-us-section"
          >
            Contact Us
          </Nav.Link>

          <NavDropdown
            title="Accounts"
            className="mx-4"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>
              <Link to="/adminlogin" className="account-link">
                <li>
                  <img
                    src={admin_logo}
                    className="w-25 h-25 rounded-pill"
                    alt="Admin Logo"
                  />
                  <span className="ms-2 ">Admin</span>
                </li>
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/customers/customersignin" className="account-link">
                <li>
                  <img
                    src={customer_logo}
                    className=" w-25 h-25 rounded-pill"
                    alt="Customer Login"
                  />
                  <span className="ms-2">Customer</span>
                </li>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
