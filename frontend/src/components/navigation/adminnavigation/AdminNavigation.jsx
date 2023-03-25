import "../../../homepage/HomePage.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import admin_logo from "../../../images/admin_images/admin_logo.png";

export default function AdminNavigation() {
  return (
    <Navbar bg="" expand="lg" className="border px-3 nav-background-color">
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

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link className=" mx-4">
            <Link
              to="/admin/adminhome"
              className="navigation-bar-items text-decoration-none"
            >
              <li>Home</li>
            </Link>
          </Nav.Link>

          <NavDropdown
            title="Product"
            className="mx-4 "
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>
              <Link to="/products" className="account-link">
                <li>All Products</li>
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/productcategories" className="account-link">
                <li>Product Categories</li>
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/productbrands" className="account-link">
                <li>Product Brands</li>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="navigation-bar-items mx-4">
            <Link
              to="/customers/showallcustomers"
              className="navigation-bar-items text-decoration-none"
            >
              <li>Customers</li>
            </Link>
          </Nav.Link>
        </Nav>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="light">
            <i class="fa fa-search" aria-hidden="true"></i>
          </Button>
        </Form>

        <Link to="/" className="account-link">
          <img
            src={admin_logo}
            className="img-logo ms-3"
            alt="Admin Logo"
            data-bs-toggle="tooltip"
            data-bs-placement="down"
            title="Logout"
          />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
