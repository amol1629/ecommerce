import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Modal1() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productStockQuantity: "",
    productOffers: "",
    brandId: "",
    categoryId: "",
  });

  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  let name, value;
  const productInsertion = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setProduct({ ...product, [name]: value });
  };

  const loadBrandPages = () => {
    axios
      .get("http://localhost:4040/productbrands/")
      .then((response) => setBrand(response.data));
  };

  const loadShowPages = () => {
    axios
      .get("http://localhost:4040/productcategories/")
      .then((response) => setCategory(response.data));
  };

  function createProduct() {
    axios
      .post("http://localhost:4040/products/", product)
      .then((response) =>
        window.alert(`Product with name "${product.productName}" is inserted`)
      );
  }

  useEffect(() => {
    loadBrandPages();
    loadShowPages();
  }, []);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="">
              <Form.Group
                as={Col}
                md="6"
                className="mb-4 "
                controlId="validationCustom01"
              >
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product name"
                  name="productName"
                  value={product.productName}
                  onChange={productInsertion}
                  className="rounded-pill"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  className="rounded-pill"
                  name="productDescription"
                  placeholder="Product Description"
                  value={product.productDescription}
                  onChange={productInsertion}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Product Price"
                  name="productPrice"
                  value={product.productPrice}
                  onChange={productInsertion}
                  className="rounded-pill"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Products in stock</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Products in stock"
                  name="productStockQuantity"
                  value={product.productStockQuantity}
                  onChange={productInsertion}
                  className="rounded-pill"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Product Offers</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product Offers"
                  name="productOffers"
                  value={product.productOffers}
                  onChange={productInsertion}
                  className="rounded-pill"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Category Id</Form.Label>
                {/* <Form.Control
                  required
                  type="text"
                  placeholder="Product Category"
                  name="categoryId"
                  value={product.categoryId}
                  onChange={productInsertion}
                  className="rounded-pill"
                /> */}

                {category[0] ? (
                  <div onChange={productInsertion} className="rounded-pill">
                    <select
                      onChange={(e) => (product.categoryId = e.target.value)}
                      id="my-select"
                      className="form-control rounded-pill"
                    >
                      <option disabled selected>
                        Select category
                      </option>
                      {console.log(product)}
                      {category.map((obj) => (
                        <option className="rounded-pill" value={obj._id}>
                          {obj.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  ""
                )}

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              {/* Brands */}
              <Form.Group
                as={Col}
                md="6"
                className="mb-4"
                controlId="validationCustom02"
              >
                <Form.Label>Brand Id</Form.Label>
                {brand[0] ? (
                  <div onChange={productInsertion} className="rounded-pill">
                    <select
                      onChange={(e) => (product.brandId = e.target.value)}
                      id="my-select"
                      className="form-control rounded-pill"
                    >
                      <option disabled selected>
                        Select brand
                      </option>
                      {console.log(product)}
                      {brand.map((obj) => (
                        <option className="rounded-pill" value={obj._id}>
                          {obj.brandname}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  ""
                )}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="text-center create-button my-3">
                <Link to="/products/showallproducts">
                  <Button
                    onClick={createProduct}
                    type="submit"
                    variant="outline-info"
                    className="rounded-pill"
                  >
                    Create Product
                  </Button>
                  {console.log(product)}
                </Link>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
