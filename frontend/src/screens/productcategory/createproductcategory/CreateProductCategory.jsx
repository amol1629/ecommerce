import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

import {
  categoryInsertedToastMessage,
  emptyCategoryToastMessage,
} from "../../../toastify/AllToastMessages";
import { CategoryValidationSchema } from "../../../validations/categoriesValidation/CategoryValidation";
import ShowAllProductCategories from "../showallproductcategories/ShowAllProductCategories";

const CreateProductCategory = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate("/productcategories");
  };
  const handleShow = () => setShow(true);

  const formInitialValues = {
    name: "",
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: formInitialValues,
    validationSchema: CategoryValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const createCategory = () => {
    console.log(values.name);
    if (values.name === "") {
      emptyCategoryToastMessage();
    } else {
      axios
        .post("http://localhost:4040/productcategories", { name: values.name })
        .then((response) => {
          categoryInsertedToastMessage();
          navigate("/productcategories", { replace: true });
        });
    }
  };

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <ShowAllProductCategories />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="">
              <Form.Group
                as={Col}
                md="12"
                className="mb-4 "
                controlId="validationCustom01"
              >
                <Form.Label>Product category</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="rounded-pill"
                />
                <p className="text-danger mt-2">{errors.name}</p>
              </Form.Group>

              <Form.Group className="text-center create-button my-3">
                <Link>
                  {!errors.name ? (
                    <Button
                      onClick={createCategory}
                      type="submit"
                      variant="outline-info"
                      className="rounded-pill"
                    >
                      Create Category
                    </Button>
                  ) : null}
                  {/* {console.log(category)} */}
                </Link>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateProductCategory;
