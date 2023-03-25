import "./HomePage.css";

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import AboutUs from "../components/aboutus/AboutUs";
import Footer from "../components/footer/Footer";
import MainNavigation from "../components/mainnavigation/MainNavigation";
import { ProductContext } from "../utils/ProductContext";

function HomePage(props) {
  const [myData, setMyData] = useState([]);
  const [fashion, setFashion] = useState([]);
  const [mobiles, setMobiles] = useState([]);
  const [groceries, setGrocery] = useState([]);
  const [beauty, setBeauty] = useState([]);
  const [isError, setIsError] = useState("");

  const { aname } = useContext(ProductContext);

  // Load electronics page
  const loadElectronicsPages = (categoryId) => {
    axios
      .get(`http://localhost:4040/products/categories/640caec93e091db55e7baf9c`)
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  };

  // load fashion page
  const loadFashionPages = (categoryId) => {
    axios
      .get(`http://localhost:4040/products/categories/640caece3e091db55e7baf9e`)
      .then((response) => setFashion(response.data))
      .catch((error) => setIsError(error.message));
  };

  // load mobiles page
  const loadMobilePages = () => {
    axios
      .get(`http://localhost:4040/products/categories/640caed83e091db55e7bafa0`)
      .then((response) => setMobiles(response.data))
      .catch((error) => setIsError(error.message));
  };

  // load grocery page
  const loadGroceryPages = () => {
    axios
      .get(`http://localhost:4040/products/categories/640caeec3e091db55e7bafa4`)
      .then((response) => setGrocery(response.data))
      .catch((error) => setIsError(error.message));
  };

  // load beauty pages
  const loadBeautyPages = () => {
    axios
      .get(`http://localhost:4040/products/categories/640d6ad59dacbcb9b236e5d7`)
      .then((response) => setBeauty(response.data))
      .catch((error) => setIsError(error.message));
  };

  useEffect(() => {
    loadElectronicsPages();
    loadFashionPages();
    loadMobilePages();
    loadGroceryPages();
    loadBeautyPages();
  }, []);

  return (
    <Container fluid className="fashion-part">
      <MainNavigation status={props.status} />

      <Container fluid className="mb-4">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="carousel-image  m-auto d-block"
              src="https://static.tumblr.com/b5d2c5b81fbc7be6db1a94b98c7226f5/yylzitm/d5Koeswe7/tumblr_static__2048_v2.jpg"
              alt="first slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image  m-auto d-block"
              src="https://assets.justinmind.com/wp-content/uploads/2019/08/ecommerce-website-design.png"
              alt="second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image  m-auto d-block"
              src="https://w0.peakpx.com/wallpaper/300/363/HD-wallpaper-girls-love-to-shop-female-girls-smile-cute-bags-shopping.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Electronics */}
      <Container fluid>
        <Container className="text-center ">
          <Row className=" ">
            <Col className="first-card-heading  ">
              <h3 className="text-center fst-italic fs-2">Electronics</h3>
            </Col>
          </Row>
        </Container>

        <Container fluid className="first-card-items align-items-center my-4 ">
          <Row className="mb-3 justify-content-center justify align-items-center">
            {myData.slice(0, 4).map((post) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2  ">
                  <Link className="text-decoration-none">
                    <Card className="card-items  border border-white text-center">
                      <Card.Img
                        variant="top"
                        src={post.productImageUrl}
                        className="card-image  px-4 pt-4"
                      />
                      <Card.Body>
                        <Card.Title className=" fs-6 mb-2">
                          {post.productName}
                        </Card.Title>

                        <p className="text-success fw-bold fst-italic">
                          &#x20B9; {post.productPrice}
                        </p>

                        <p className="text-warning">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i
                            class="fa fa-star-half-full"
                            aria-hidden="true"
                          ></i>
                        </p>

                        <span className="me-2 px-2 py-1 bg-warning rounded-pill">
                          <i className="fa px-1 fa-gift" aria-hidden="true"></i>
                          {post.productOffers}
                        </span>
                        {/* <Button
                          variant="outline-success"
                          onClick={getProductByIdPage(post)}
                        >
                          Details
                        </Button> */}
                        <Link
                          className="card-detail-link text-decoration-none"
                          to={"/products/" + post._id}
                        >
                          Details
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

      {/* Mobiles */}
      <Container fluid>
        <Container className="text-center">
          <Row className=" mb-1">
            <Col className="first-card-heading  ">
              <h3 className="text-center fst-italic fs-2">Mobiles</h3>
            </Col>
          </Row>
        </Container>

        <Container fluid className="first-card-items align-items-center my-4 ">
          <Row className="mb-3 justify-content-center justify align-items-center">
            {mobiles.slice(0, 4).map((post) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2  ">
                  <Link className="text-decoration-none">
                    <Card className="card-items  border border-white text-center">
                      <Card.Img
                        variant="top"
                        src={post.productImageUrl}
                        className="card-image  px-4 pt-4"
                      />
                      <Card.Body>
                        <Card.Title className=" fs-6 mb-2">
                          {post.productName}
                        </Card.Title>

                        <p className="text-success fw-bold fst-italic">
                          &#x20B9; {post.productPrice}
                        </p>

                        <p className="text-warning">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i
                            class="fa fa-star-half-empty"
                            aria-hidden="true"
                          ></i>
                          <i class="fa fa-star-o" aria-hidden="true"></i>
                        </p>

                        <span className="me-2 px-2 py-1 bg-warning rounded-pill">
                          <i className="fa px-1 fa-gift" aria-hidden="true"></i>
                          {post.productOffers}
                        </span>
                        {/* <Button variant="outline-success">Details</Button> */}
                        <Link
                          className="card-detail-link text-decoration-none"
                          to={"/products/" + post._id}
                        >
                          Details
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

      {/* Fashion */}
      <Container fluid>
        <Container className="text-center">
          <Row className=" mb-1">
            <Col className="first-card-heading  ">
              <h3 className="text-center fst-italic fs-2 ">Fashion</h3>
            </Col>
          </Row>
        </Container>

        <Container fluid className="first-card-items align-items-center my-4 ">
          <Row className="mb-3 justify-content-center justify align-items-center">
            {fashion.slice(0, 4).map((post) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2  ">
                  <Link className="text-decoration-none">
                    <Card className="card-items  border border-white text-center">
                      <Card.Img
                        variant="top"
                        src={post.productImageUrl}
                        className="card-image  px-4 pt-4"
                      />
                      <Card.Body>
                        <Card.Title className=" fs-6 mb-2">
                          {post.productName}
                        </Card.Title>

                        <p className="text-success fw-bold fst-italic">
                          &#x20B9; {post.productPrice}
                        </p>

                        <p className="text-warning">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i
                            class="fa fa-star-half-full"
                            aria-hidden="true"
                          ></i>
                        </p>

                        <span className="me-2 px-2 py-1 bg-warning rounded-pill">
                          <i className="fa px-1 fa-gift" aria-hidden="true"></i>
                          {post.productOffers}
                        </span>
                        {/* <Button variant="outline-success">Details</Button> */}
                        <Link
                          className="card-detail-link text-decoration-none"
                          to={"/products/" + post._id}
                        >
                          Details
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

      {/* Grocery */}
      <Container fluid>
        <Container className="text-center ">
          <Row className=" ">
            <Col className="first-card-heading  ">
              <h3 className="text-center fst-italic fs-2 ">Grocery</h3>
            </Col>
          </Row>
        </Container>

        <Container fluid className="first-card-items align-items-center my-4 ">
          <Row className="mb-3 justify-content-center justify align-items-center">
            {groceries.slice(0, 4).map((post) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2  ">
                  <Link className="text-decoration-none">
                    <Card className="card-items  border border-white text-center">
                      <Card.Img
                        variant="top"
                        src={post.productImageUrl}
                        className="card-image  px-4 pt-4"
                      />
                      <Card.Body>
                        <Card.Title className=" fs-6 mb-2">
                          {post.productName}
                        </Card.Title>

                        <p className="text-success fw-bold fst-italic">
                          &#x20B9; {post.productPrice}
                        </p>

                        <p className="text-warning">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i
                            class="fa fa-star-half-empty"
                            aria-hidden="true"
                          ></i>
                          <i class="fa fa-star-o" aria-hidden="true"></i>
                          <i class="fa fa-star-o" aria-hidden="true"></i>
                        </p>

                        <span className="me-2 px-2 py-1 bg-warning rounded-pill">
                          <i className="fa px-1 fa-gift" aria-hidden="true"></i>
                          {post.productOffers}
                        </span>
                        {/* <Button variant="outline-success">Details</Button> */}
                        <Link
                          className="card-detail-link text-decoration-none"
                          to={"/products/" + post._id}
                        >
                          Details
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

      {/* Beauty */}

      <Container fluid>
        <Container className="text-center">
          <Row className=" mb-1">
            <Col className="first-card-heading  ">
              <h3 className="text-center fst-italic fs-2 ">Beauty</h3>
            </Col>
          </Row>
        </Container>

        <Container fluid className="first-card-items align-items-center my-4 ">
          <Row className="mb-3 justify-content-center justify align-items-center">
            {beauty.slice(0, 4).map((post) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-2  ">
                  <Link className="text-decoration-none">
                    <Card className="card-items  border border-white text-center">
                      <Card.Img
                        variant="top"
                        src={post.productImageUrl}
                        className="card-image  px-4 pt-4"
                      />
                      <Card.Body>
                        <Card.Title className=" fs-6 mb-2">
                          {post.productName}
                        </Card.Title>

                        <p className="text-success fw-bold fst-italic">
                          &#x20B9; {post.productPrice}
                        </p>

                        <p className="text-warning">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </p>

                        <span className="me-2 px-2 py-1 bg-warning rounded-pill">
                          <i className="fa px-1 fa-gift" aria-hidden="true"></i>
                          {post.productOffers}
                        </span>
                        {/* <Button variant="outline-success">Details</Button> */}
                        <Link
                          to={"/products/" + post._id}
                          className="card-detail-link text-decoration-none"
                        >
                          Details
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

      {/* About Us */}
      {/* <Container
        fluid
        id="about-us-section"
        className="about_us first-card-items align-items-center my-5 "
      >
        <Row>
          <h3 className="text-center py-4">Why to choose PentKART ?</h3>
          <Col md={3} sm={6}>
            <div
              className="card m-auto mb-5 text-success"
              style={{ width: "14rem" }}
            >
              <div className="card-body text-center">
                <i className=" fa fa-5x fa-truck" aria-hidden="true"></i>

                <p className="fw-bold pt-3">Free Shipping</p>
              </div>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div
              className="card m-auto mb-5 text-success"
              style={{ width: "14rem" }}
            >
              <div className="card-body text-center">
                <i class="fa fa-home fa-5x" aria-hidden="true"></i>

                <p className="fw-bold pt-3">Offline Store</p>
              </div>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div
              className="card m-auto mb-5 text-success"
              style={{ width: "14rem" }}
            >
              <div className="card-body text-center">
                <i class="fa fa-thumbs-up fa-5x" aria-hidden="true"></i>

                <p className="fw-bold pt-3">Quick Response</p>
              </div>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div
              className="card m-auto mb-5 text-success"
              style={{ width: "14rem" }}
            >
              <div className="card-body text-center">
                <i class="fa fa-percent fa-5x" aria-hidden="true"></i>

                <p className="fw-bold pt-3">Discount System</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
      <AboutUs />

      {/* Footer */}
      {/* <Container fluid className="bg-light footer " id="contact-us-section">
        <Row className="justify-content-center m-auto pb-3  py-4">
          <Col md={6}>
            <Col className="mb-3">
              <a
                href="mailto: Radhika.Pathak@harbingergroup.com"
                className="text-decoration-none footer_email_link "
              >
                <i class="fa fa-envelope-open" aria-hidden="true"></i>
                <span className="ms-2">Radhika.Pathak@harbingergroup.com</span>
              </a>
            </Col>

            <Col className="mb-3">
              <a
                href="mailto: Himashu.Pise@harbingergroup.com"
                className="text-decoration-none footer_email_link "
              >
                <i class="fa fa-envelope-open" aria-hidden="true"></i>

                <span className="ms-2">Himashu.Pise@harbingergroup.com</span>
              </a>
            </Col>

            <Col className="mb-3">
              <a
                href="mailto: Tanmay.Deshmukh@harbingergroup.com"
                className="text-decoration-none footer_email_link "
              >
                <i class="fa fa-envelope-open" aria-hidden="true"></i>

                <span className="ms-2">Tanmay.Deshmukh@harbingergroup.com</span>
              </a>
            </Col>

            <Col className="mb-3">
              <a
                href="mailto: Mahadev.Bansode@harbingergroup.com"
                className="text-decoration-none footer_email_link "
              >
                <i class="fa fa-envelope-open" aria-hidden="true"></i>

                <span className="ms-2">Mahadev.Bansode@harbingergroup.com</span>
              </a>
            </Col>

            <Col className="mb-3">
              <a
                href="mailto: Amol.Rathod@harbingergroup.com"
                className="text-decoration-none footer_email_link "
              >
                <i class="fa fa-envelope-open" aria-hidden="true"></i>

                <span className="ms-2">Amol.Rathod@harbingergroup.com</span>
              </a>
            </Col>
          </Col>

          <Col md={4} className="text-start pt-4">
            <a href="https://www.harbingergroup.com/">
              <img
                src="https://www.harbingergroup.com/wp-content/uploads/2022/12/harbinger-logo.png "
                className="w-75 h-75"
                alt="Harbinger Group Logo"
              />
            </a>
          </Col>
        </Row>

        <Row className="footer pt-3">
          <Col>
            <p className="text-center ">
              {" "}
              © 1990 - 2023 Harbinger Group. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container> */}
      <Footer />
    </Container>
  );
}

export default HomePage;
