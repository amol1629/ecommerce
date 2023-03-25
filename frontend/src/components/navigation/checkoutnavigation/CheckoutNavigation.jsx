import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

import { searchEmptyToastMessage } from "../../../toastify/AllToastMessages";
import { ProductContext } from "../../../utils/ProductContext";

// import admin_logo from '../../../images/admin_images/admin_logo.png';

export default function CheckoutNavigation(props) {
  // product context
  const { cart } = useContext(ProductContext);
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

        <Col className="text-end align-self-center">
          <h1 className="text-end text-light">Checkout Page</h1>
        </Col>

        <Col className="text-end align-self-end justify-content-center my-2">
          <Link to="/" className="account-link">
            <img
              src="https://thumbs.dreamstime.com/b/customer-icon-element-simple-web-name-mobile-concept-apps-thin-line-can-be-used-white-background-170190190.jpg"
              className="img-logo ms-3"
              alt="Admin Logo"
              data-bs-toggle="tooltip"
              data-bs-placement="down"
              title="Logout"
            />
          </Link>
        </Col>
      </Navbar>
    </Container>
  );
}
