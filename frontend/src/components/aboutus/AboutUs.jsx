import "./AboutUs.css";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutUs() {
  return (
    <Container
      fluid
      id="about-us-section"
      className="about_us first-card-items align-items-center my-5 "
    >
      <Row className="about-us-cards">
        <h3 className="text-center about-us-cards py-4">
          Why to choose PentKART ?
        </h3>
        <Col md={3} sm={6}>
          <div
            className="card m-auto mb-5 about-us-card-item"
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
            className="card m-auto mb-5 about-us-card-item"
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
            className="card m-auto mb-5 about-us-card-item"
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
            className="card m-auto mb-5 about-us-card-item"
            style={{ width: "14rem" }}
          >
            <div className="card-body text-center">
              <i class="fa fa-percent fa-5x" aria-hidden="true"></i>

              <p className="fw-bold pt-3">Discount System</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
