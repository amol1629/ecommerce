import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import AdminNavigation from "../../../components/navigation/adminnavigation/AdminNavigation";
import { customerDeletedToastMessage } from "../../../toastify/AllToastMessages";

const ShowAllCustomers = () => {
  const [customers, setCustomer] = useState([]);
  const [isError, setIsError] = useState("");

  const loadShowAllCustomersPages = () => {
    axios
      .get("http://localhost:4040/customers/")
      .then((response) => setCustomer(response.data))
      .catch((error) => setIsError(error.message));
  };

  useEffect(() => {
    loadShowAllCustomersPages();
  }, []);

  // Delete product by id :
  const deleteProductById = (_id) => {
    axios
      .delete(`http://localhost:4040/customers/${_id}`)
      .then(() => {
        loadShowAllCustomersPages();
      })
      .catch(() => {
        window.alert("Error while deleting product");
      });
  };

  return (
    <Container fluid className="main-container">
      <Row>
        <Col>
          <AdminNavigation />
        </Col>
      </Row>

      <Row className="my-3 mx-2 align-items-center">
        <Col xsm={6} xxsm={12} className="text-start m-auto">
          <h2>Show all customers</h2>
        </Col>

        <Col xsm={6} xxsm={12} className="text-end m-auto">
          <Link
            variant="outline-success"
            className=" rounded-pill btn btn-outline-success"
            to="/customer/"
          >
            <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
            <span className="ms-1">Create Customer</span>
          </Link>
        </Col>
      </Row>

      <Row className="mx-2">
        <Col>
          <Table
            responsive
            striped
            bordered
            hover
            className="mb-5 text-xsm-center text-md-start m-auto"
          >
            <thead className="text-center">
              <tr>
                <th>Sr No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {customers.map((post, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ind + 1}</td>
                    <td>{post.customerFirstName}</td>
                    <td>{post.customerLastName}</td>
                    <td>{post.customerPhone}</td>
                    <td>{post.customerAddress}</td>
                    <td>{post.customerEmail}</td>
                    <td>{post.customerPassword}</td>

                    <td className="">
                      {/* <Link
                        className="text-decoration-none"
                        to={"/customers/" + post._id}
                      >
                        <i
                          class="fa fa-edit text-success"
                          aria-hidden="true"
                        ></i>
                      </Link> */}

                      <Link
                        className="text-decoration-none"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            `Do you really want to delete "${post.customerFirstName} ${post.customerLastName}" ?`
                          );

                          if (confirmBox === true) {
                            deleteProductById(post._id);
                            customerDeletedToastMessage();
                          }
                        }}
                      >
                        <i
                          class="fa fa-trash text-danger ms-3"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className="mb-3 mx-2 align-items-center">
        <Col className="text-start">
          <Link to="/admin/adminhome">
            <Button
              type="submit"
              variant="outline-dark"
              className="mb-5 px-4 rounded-pill"
            >
              <i class="fa fa-backward" aria-hidden="true"></i>
              <span className="ms-2">Back</span>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowAllCustomers;
