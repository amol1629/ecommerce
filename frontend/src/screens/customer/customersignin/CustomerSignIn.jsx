import "./CustomerSignIn.css";

import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

import SecondFooter from "../../../components/footer/SecondFooter";
import MainNavigation from "../../../components/mainnavigation/MainNavigation";
import { CustomerService } from "../../../services/customerservices/CustomerService";
import {
  allFieldErrorToastMessage,
  invalidEmailToastMessage,
  invalidPasswordToastMessage,
  successToastMessage,
} from "../../../toastify/AllToastMessages";
import { ProductContext } from "../../../utils/ProductContext";
import { customerLoginValidationSchema } from "../../../validations/customersValidation/CustomerValidation";

function CustomerSignIn(props) {
  const { setCustomerDetailsFunction, customerStatusSetter } =
    useContext(ProductContext);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      customerEmail: "",
      customerPassword: "",
    },

    validationSchema: customerLoginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const navigate = useNavigate();

  const checkcustomerLogin = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      if (values.customerEmail === "" || values.customerPassword === "")
        allFieldErrorToastMessage();
      else {
        await CustomerService(values.customerEmail).then((res) => {
          console.log("Customer Response : ", res.data.customerPassword);
          res.data === "No User Found"
            ? invalidEmailToastMessage()
            : values.customerPassword !== res.data.customerPassword
            ? invalidPasswordToastMessage()
            : customerStatusSetter(true);
          setCustomerDetailsFunction(res.data);
          console.log("Status for customer : ", props.status);
          navigate(
            "/customer/pentkart",
            { replace: true },
            successToastMessage()

            // alert(
            //   `"${res.data.customerFirstName} ${res.data.customerLastName}" logged in successfully..`
            // )
          );
          console.log("Customer response : ", res);
          return res;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="customer-signin">
      <MainNavigation />

      <Container>
        <Row className="">
          <Col>
            <h1 className="text-center text-danger mt-4 fst-italic">
              Customer Login
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center ">
          <Col
            md="6"
            className="align-self-center border border-secondary rounded p-4"
          >
            <Form onSubmit={handleSubmit}>
              <Row className="mb-5 ">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>User name</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="customerEmail"
                      value={values.customerEmail}
                      onChange={handleChange}
                      placeholder="User name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                  <p className="text-danger mt-2">{errors.customerEmail}</p>
                </Form.Group>
              </Row>
              <Row className="mb-5 ">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Password</Form.Label>

                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i class="fa fa-key" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      name="customerPassword"
                      value={values.customerPassword}
                      onChange={handleChange}
                      placeholder="Password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                  <p className="text-danger mt-2">{errors.customerPassword}</p>
                </Form.Group>
              </Row>

              <Col className="text-center">
                <Link className="text-decoration-none">
                  {errors.customerPassword ? null : errors.customerEmail ? null : (
                    <Button
                      className="btn rounded-pill px-5  "
                      type="submit"
                      onClick={checkcustomerLogin}
                    >
                      Login
                    </Button>
                  )}
                </Link>
              </Col>

              <Col className="text-center mt-4">
                <span className="me-2">Don't have a account ?</span>
                <Link
                  to="/customers/customersignup"
                  className="  link-item-create text-decoration-none"
                >
                  Create
                </Link>
              </Col>
            </Form>
          </Col>

          <Col md="6" className="align-self-center">
            <Col className="login-page-second-part-img text-center ">
              <img
                // src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png"
                src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7873.jpg?w=740&t=st=1679131988~exp=1679132588~hmac=b7284ef454f78e7f3dd89b65ce4599ec0587ddfe7b48d5f401ed7e959dc97789"
                className="image-responsive w-75 h-100"
                alt=""
              ></img>
            </Col>
          </Col>
        </Row>

        <SecondFooter />
      </Container>
    </Container>
  );
}

export default CustomerSignIn;
