import "./DisplaySingleProduct.css";

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import CustomerNavigation from "../../../components/navigation/customernavigation/CustomerNavigation";

const DisplaySingleProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productImageUrl: "",
    productName: "",
    productDescription: "",
    productPrice: "",
    productStockQuantity: "",
    productOffers: "",
  });

  const [productImageUrl, setproductImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productStockQuantity, setproductStockQuantity] = useState("");
  const [productOffers, setproductOffers] = useState("");

  //   const productId = useParams();
  //   console.log(`product Id : ${productId}`);

  const { id } = useParams();

  const getProductById = () => {
    axios.get(`http://localhost:4040/products/${id}`).then((response) => {
      // eslint-disable-next-line no-unused-expressions, no-sequences
      setProduct(response.data),
        setproductImageUrl(response.data.productImageUrl),
        setProductName(response.data.productName),
        setproductDescription(response.data.productDescription),
        setproductPrice(response.data.productPrice),
        setproductStockQuantity(response.data.productStockQuantity),
        setproductOffers(response.data.productOffers);
    });
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <Container fluid>
      <CustomerNavigation />
      <Row className="mt-3 px-5    justify-content-center">
        <Col md={4} className="text-center me-md-5 align-self-center">
          <img
            src={productImageUrl}
            className="p-5 m-auto single-product-image image-fluid"
            alt=""
          />
        </Col>

        <Col md={6} className="text-start align-self-center  pt-5 px-5">
          <Col className="mb-4">
            <h3 className="single-product-details-productName">
              {productName}
            </h3>
          </Col>

          <Col className="mb-4">
            <p className="fst-italic single-product-details-productDescription ">
              {productDescription}
            </p>
          </Col>

          <Col className="mb-4">
            <p>
              <span className="me-4 text-warning">
                {" "}
                <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
                <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
                <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
                <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
                <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
              </span>
              <span className="px-3 py-1 bg-info rounded-pill">
                <i className="fa fa-tag me-2" aria-hidden="true"></i>
                {productOffers}
              </span>
            </p>
          </Col>

          <Col className=" ">
            <p className="fs-3">
              <sup>&#8377;</sup> <span className="fs-1">{productPrice}</span>
            </p>
          </Col>

          <Col className=" ">
            <Row className="text-center">
              <Col
                md={3}
                className="single-product-details-delivery-features  align-self-center text-center"
              >
                <span className="me-4">
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
                    alt=""
                    className="w-50 h-50 image-fluid"
                  />
                  <p>Free Delivery</p>
                </span>
              </Col>

              <Col
                md={3}
                className="single-product-details-delivery-features  align-self-center align-self-center"
              >
                <span className="me-4">
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
                    alt=""
                    className="w-50 h-50 image-fluid"
                  />
                  <p>Pay on Delivery</p>
                </span>
              </Col>

              <Col
                md={3}
                className="single-product-details-delivery-features  align-self-center "
              >
                <span className="me-4">
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                    alt=""
                    className="w-50 h-50 image-fluid"
                  />
                  <p>7 days Replacement</p>
                </span>
              </Col>

              <Col
                md={3}
                className="single-product-details-delivery-features   align-self-center"
              >
                <span className="me-4">
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
                    alt=""
                    className="w-50 h-50 image-fluid"
                  />
                  <p>PentKart Delivered</p>
                </span>
              </Col>
            </Row>

            {/* <span className="me-4">
              <i
                className="fa fa-money fa-2x  rounded-circle p-2 m-auto single-product-details-delivery-features-icons"
                aria-hidden="true"
              ></i>
              </span>

            <span className="me-4">
            <i
            className="fa fa-cart-arrow-down fa-2x  rounded-circle p-2 m-auto single-product-details-delivery-features-icons"
                aria-hidden="true"
              ></i>
            </span> */}
          </Col>
          <Col className="text-start align-self-center">
            <Button
              variant="outline-warning rounded-pill me-3 mb-2"
              ata-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Add to cart"
            >
              Add to cart
            </Button>

            <Button
              variant="outline-success rounded-pill mx-3 mb-2"
              ata-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Order"
            >
              Order
            </Button>
          </Col>
        </Col>

        {/* <Col md={2} className="text-start align-self-center  py-5">
          <p>Product Price</p>
        </Col> */}
      </Row>
    </Container>
  );
};

export default DisplaySingleProduct;
