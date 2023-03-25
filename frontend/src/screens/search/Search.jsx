import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import CustomerNavigation from "../../components/navigation/customernavigation/CustomerNavigation";
import {
  allFieldErrorToastMessage,
  itemAddedToCartToastMessage,
} from "../../toastify/AllToastMessages";
import { ProductContext } from "../../utils/ProductContext";

const Search = (props) => {
  // context
  const { cart, setCart, addProduct } = useContext(ProductContext);

  const [myData, setMyData] = useState([]);
  const location = useLocation();
  console.log("Location : ", location);
  const [search, setSearch] = useState([]);

  const loadShowPages = () => {
    try {
      axios
        .get("http://localhost:4040/products")
        .then((response) => setMyData(response.data))
        .catch(() => {
          allFieldErrorToastMessage();
        });
    } catch (error) {}
  };

  //   console.log("My data : ", myData);

  useEffect(() => {
    loadShowPages();
  }, [props._id]);

  useEffect(() => {
    let searchValues = [];

    searchValues = myData.filter((data) =>
      data.productName.toLowerCase().includes(location.state.toLowerCase())
    );

    setSearch(searchValues);
    console.log("Search values : ", searchValues);
    // setSearch(searchValue);
  }, [location.state, myData, props._id]);

  return (
    <Container fluid>
      <CustomerNavigation />

      <Row className="m-3">
        <Col>
          <h1>Your search results for "{location.state}"</h1>
          <p className="fst-italic">
            <span className="text-success">Total Results found : </span>
            <span className="text-light mx-1 badge bg-primary">
              {search.length}
            </span>
          </p>
        </Col>
      </Row>

      <Container
        fluid
        className=" align-items-center my-4 customer-homepage-main-container p-4"
      >
        <Row className="mb-3 category-card-main-div justify-content-center justify align-items-center">
          {search.map((post) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Link className="text-decoration-none ">
                  <Card className=" border all_product_category_card border-white text-center">
                    <Card.Img
                      variant="top"
                      src={post.productImageUrl}
                      className="category-card-image px-2 pt-4"
                    />
                    <Card.Body>
                      <Card.Title className=" card-title fs-6 mb-2">
                        {post.productName}
                      </Card.Title>

                      <p className=" py-2 fw-bold fst-italic">
                        <span className="me-2 px-2 py-1 bg-warning rounded-pill">
                          <i className="fa px-1 fa-gift" aria-hidden="true"></i>
                          {post.productOffers}
                        </span>

                        <span className="me-3 text-danger">
                          {" "}
                          &#x20B9; {post.productPrice}
                        </span>
                      </p>

                      <p className="text-warning">
                        <i
                          className="ps-2 fa fa-star fa-sm"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="ps-2 fa fa-star fa-sm"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="ps-2 fa fa-star fa-sm"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="ps-2 fa fa-star fa-sm"
                          aria-hidden="true"
                        ></i>
                      </p>

                      <Link to={"/products/" + post._id}>
                        <Button
                          variant="outline-success rounded-pill me-3 mb-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="View details"
                        >
                          Details
                        </Button>
                      </Link>

                      {/* <Link to="">
                      <Button
                        variant="outline-warning rounded-pill me-3 mb-2"
                        ata-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add to cart"
                        onClick={(e) => {
                          addToCart(e, myData);
                        }}
                      >
                        Add to cart
                      </Button>
                    </Link> */}
                      <Link to="/customer/pentkart">
                        <Button
                          variant="outline-warning rounded-pill me-3 mb-2"
                          ata-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to cart"
                          onClick={(e) => {
                            addProduct(post, itemAddedToCartToastMessage());
                          }}
                        >
                          Add to cart
                        </Button>
                      </Link>

                      <Link>
                        <Button
                          variant="outline-info rounded-pill me-3 mb-2"
                          ata-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Buy Now"
                        >
                          Buy Now
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Search;
