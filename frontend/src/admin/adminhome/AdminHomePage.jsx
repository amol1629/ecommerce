import "../../homepage/HomePage.css";
import "./AdminHomePage.css";

import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import AdminNavigation from "../../components/navigation/adminnavigation/AdminNavigation";
import admin_homepage1 from "../../images/admin_homepage/admin_homepage_1.jpg";
import admin_homepage3 from "../../images/admin_homepage/admin_homepage_3.png";
import admin_homepage5 from "../../images/admin_homepage/admin_homepage_5.jpg";
import admin_homepage6 from "../../images/admin_homepage/admin_homepage_6.jpg";

const AdminHomePage = () => {
  return (
    <Container fluid className="">
      <AdminNavigation />

      <Container
        fluid
        className=" my-4 justify-content-center justify align-items-center  m-auto d-flex"
      >
        <Row className="mb-3 justify-content-center justify align-items-center  m-auto">
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-2 align-self-center text-center"
          >
            <Link to="/products" className="text-decoration-none">
              <Card
                className="admin-homepage-card"
                style={{ width: "17rem", height: "17rem" }}
              >
                <Card.Header>Products</Card.Header>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={admin_homepage6}
                    className="h-50  px-4 my-3 admin-homepage-card-image"
                  />

                  <Button variant="outline-danger rounded-pill">
                    Show Details
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-2 align-self-center text-center"
          >
            <Link to="/productcategories" className="text-decoration-none">
              <Card
                className="admin-homepage-card"
                style={{ width: "17rem", height: "17rem" }}
              >
                <Card.Header>Product Categories</Card.Header>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={admin_homepage1}
                    className="h-50  px-4 my-3 admin-homepage-card-image"
                  />

                  <Button variant="outline-danger rounded-pill">
                    Show Details
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-2 align-self-center text-center"
          >
            <Link to="/productbrands" className="text-decoration-none">
              <Card
                className="admin-homepage-card"
                style={{ width: "17rem", height: "17rem" }}
              >
                <Card.Header>Product Brands</Card.Header>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={admin_homepage3}
                    className="h-50  px-4 my-3 admin-homepage-card-image"
                  />

                  <Button variant="outline-danger rounded-pill">
                    Show Details
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-2 align-self-center text-center"
          >
            <Link
              to="/customers/showallcustomers"
              className="text-decoration-none"
            >
              <Card
                className="admin-homepage-card"
                style={{ width: "17rem", height: "17rem" }}
              >
                <Card.Header>Customers</Card.Header>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={admin_homepage5}
                    className="h-50  px-4 my-3 admin-homepage-card-image"
                  />

                  <Button variant="outline-danger rounded-pill">
                    Show Details
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AdminHomePage;
