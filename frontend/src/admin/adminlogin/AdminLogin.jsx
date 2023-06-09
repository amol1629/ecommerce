import "./AdminLogin.css";
import "react-toastify/dist/ReactToastify.css";

import { useFormik } from "formik";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

import SecondFooter from "../../components/footer/SecondFooter";
import MainNavigation from "../../components/mainnavigation/MainNavigation";
import { AdminLoginService } from "../../services/AdminServices/AdminLoginService";
import {
  allFieldErrorToastMessage,
  invalidEmailToastMessage,
  invalidPasswordToastMessage,
  successToastMessage,
} from "../../toastify/AllToastMessages";
import { adminValidationSchema } from "../../validations/adminValidation/AdminValidation";

function AdminLogin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      validationSchema: adminValidationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const navigate = useNavigate();

  const checkAdminLogin = (e) => {
    e.preventDefault();

    try {
      if (values.email === "" || values.password === "") {
        // alert("Please enter email and password..!");
        allFieldErrorToastMessage();
      } else {
        AdminLoginService(values.email).then((res) => {
          res.data === "No Admin Found"
            ? invalidEmailToastMessage()
            : values.password !== res.data.password
            ? invalidPasswordToastMessage()
            : navigate(
                "/admin/adminhome",
                { replace: true },
                successToastMessage()
              );
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // navigate("/showallproducts");

  return (
    <Container fluid className="admin-login-main-container">
      <MainNavigation />

      <Container fluid>
        <Row className="">
          <Col>
            <h1 className="text-center text-danger mt-3 fst-italic">
              Admin Login
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center ">
          <Col
            md="6"
            className="align-self-center border border-secondary rounded p-5"
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
                      type="text"
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="User name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                  {errors.email && touched.email ? (
                    <p className="text-danger mt-2">{errors.email}</p>
                  ) : null}
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
                      name="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                  {errors.password || touched.password ? (
                    <p className="text-danger mt-2">{errors.password}</p>
                  ) : null}
                </Form.Group>
              </Row>

              <Col className="text-center">
                <Link to="" className="text-decoration-none">
                  {errors.password ? null : errors.email ? null : (
                    <Button
                      className="btn rounded-pill px-5  "
                      type="submit"
                      onClick={checkAdminLogin}
                    >
                      Login
                    </Button>
                  )}
                </Link>
              </Col>
            </Form>
          </Col>

          <Col md="6" className="align-self-center">
            <Col className="login-page-second-part-img text-center ">
              <img
                // src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
                src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1679131832~exp=1679132432~hmac=c41dc9620af34bf3e07d55a29c564da375e09d27ebaacf8ca8ec0c4b8e26153e"
                className="image-responsive w-75 h-50"
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

export default AdminLogin;
