import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';

import { brandInsertedToastMessage, emptyBrandToastMessage } from '../../../toastify/AllToastMessages';
import { BrandValidationSchema } from '../../../validations/brandsValidation/BrandValidation';
import ShowAllProductBrands from '../showallproductbrands/ShowAllProductBrands';

const CreateProductBrand = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate("/productbrands");
  };
  const handleShow = () => setShow(true);

  const formInitialValues = {
    brandname: "",
  };

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: formInitialValues,

      validationSchema: BrandValidationSchema,

      onSubmit: (values) => {
        console.log(values);
      },
    });

  const createBrand = () => {
    if (values.brandname === "") {
      emptyBrandToastMessage();
    } else {
      axios
        .post("http://localhost:4040/productbrands", {
          brandname: values.brandname,
        })
        .then((response) => {
          brandInsertedToastMessage();
          navigate("/productbrands", { replace: true });
        });
    }
  };

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <ShowAllProductBrands />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product Brand</Modal.Title>
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
                <Form.Label>Product Brand</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product Brand"
                  name="brandname"
                  onChange={handleChange}
                  value={values.brandname}
                  className="rounded-pill"
                />
                {console.log("handle chage : ", values.brandname)}
                <p className="text-danger mt-2">{errors.brandname}</p>
              </Form.Group>

              <Form.Group className="text-center create-button my-3">
                <Link>
                  {!errors.brandname ? (
                    <Button
                      onClick={createBrand}
                      type="submit"
                      variant="outline-info"
                      className="rounded-pill"
                    >
                      Create Brand
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

export default CreateProductBrand;
