import "../../../components/mainnavigation/MainNavigation.css";
import "../../../homepage/HomePage.css";
import "./CustomerNavigation.css";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

import { searchEmptyToastMessage } from "../../../toastify/AllToastMessages";
import { ProductContext } from "../../../utils/ProductContext";

// import admin_logo from '../../../images/admin_images/admin_logo.png';

export default function CustomerNavigation(props) {
  // product context
  const { cart, customerStatus, customerDetails, customerStatusSetter } =
    useContext(ProductContext);
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  const loadShowPages = () => {
    axios
      .get("http://localhost:4040/products/")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  };

  console.log("Customer Navigation : ", props.status);

  const redirectoToSerach = () => {
    if (searchField === "") {
      searchEmptyToastMessage();
      navigate("/customer/pentkart");
    } else {
      navigate("/search", { state: searchField });
    }
  };

  useEffect(() => {
    loadShowPages();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar bg="" expand="lg" className="nav-background-color px-3">
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
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link className="navigation-bar-items mx-4">
                  {props.status ? (
                    <Link
                      to="/admin/adminhome"
                      className="navigation-bar-items text-decoration-none"
                    >
                      <li>Home</li>
                    </Link>
                  ) : (
                    <Link
                      to="/customer/pentkart"
                      className="navigation-bar-items text-decoration-none"
                    >
                      <li>Home</li>
                    </Link>
                  )}
                </Nav.Link>
                <Nav.Link className="navigation-bar-items mx-4">
                  <Link
                    to=""
                    className="navigation-bar-items text-decoration-none"
                  >
                    <li>About Us</li>
                  </Link>
                </Nav.Link>
                <div className="search-input">
                  <Form className="d-flex ms-5 ">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2 "
                      aria-label="Search"
                      onChange={(e) => {
                        setSearchField(e.target.value);
                        console.log("On change : ", e.target.value);
                      }}
                    />
                    <Button variant="light" onClick={redirectoToSerach}>
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </Button>
                  </Form>
                </div>
              </Nav>

              {/* {props.status ? (
                <Link to="/cart">
                  <Button
                    className="cart-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Go to cart"
                  >
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                    <sup className="text-danger fw-bolder ps-1">
                      {cart.totalItems}
                    </sup>
                  </Button>
                </Link>
              ) : (
                <Link
                  to="/customers/customersignin"
                  className="text-decoration-none"
                >
                  <Button
                    variant="outline-success"
                    className="rounded-pill px-5  "
                    type="submit"
                  >
                    Login
                  </Button>
                </Link>
              )} */}

              <Link to="/cart">
                <Button
                  className="cart-icon"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Go to cart"
                >
                  <i className="fa fa-cart-plus" aria-hidden="true"></i>
                  <sup className="text-danger fw-bolder ps-1">
                    {cart.length}
                  </sup>
                </Button>
              </Link>
              {customerStatus ? (
                <Link className="account-link">
                  {/* <img
                    src="https://thumbs.dreamstime.com/b/customer-icon-element-simple-web-name-mobile-concept-apps-thin-line-can-be-used-white-background-170190190.jpg"
                    className="img-logo ms-3"
                    alt="Admin Logo"
                    data-bs-toggle="tooltip"
                    data-bs-placement="down"
                    title="Logout"
                  /> */}

                  <DropdownButton
                    variant="none"
                    align="end"
                    title={
                      <i className="fa fa-user text-light" aria-hidden="true">
                        {customerDetails.customerFirstName}
                      </i>
                    }
                    id="dropdown-menu-align-end text-light fs-3"
                    className="ms-3"
                  >
                    <Dropdown.Item className=" rounded-pill mb-2" eventKey="1">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item className=" rounded-pill mb-2" eventKey="2">
                      Orders
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={(e) => customerStatusSetter(false)}
                      className="text-danger rounded-pill mb-2"
                      eventKey="4"
                    >
                      Logout
                    </Dropdown.Item>
                  </DropdownButton>
                </Link>
              ) : (
                <Link className="account-link">
                  {/* <img
                    src="https://thumbs.dreamstime.com/b/customer-icon-element-simple-web-name-mobile-concept-apps-thin-line-can-be-used-white-background-170190190.jpg"
                    className="img-logo ms-3"
                    alt="Admin Logo"
                    data-bs-toggle="tooltip"
                    data-bs-placement="down"
                    title="Logout"
                  /> */}
                  <Button>LogIn</Button>
                </Link>
              )}
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
