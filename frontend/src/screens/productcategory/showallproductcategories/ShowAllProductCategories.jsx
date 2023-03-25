import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";

import AdminNavigation from "../../../components/navigation/adminnavigation/AdminNavigation";
import deleteProductById from "../../../services/productservices/ProductService";

const ShowAllProductCategories = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const navigate = useNavigate();

  // Load page after delete
  const loadShowPages = () => {
    axios
      .get("http://localhost:4040/productcategories/")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  };

  useEffect(() => {
    loadShowPages();
  }, []);

  const [product, setProduct] = useState({
    name: "",
  });

  // Delete product by id :
  const deleteProductById = (_id) => {
    axios
      .delete(`http://localhost:4040/productcategories/${_id}`)
      .then(() => {
        loadShowPages();
      })
      .catch(() => {
        window.alert("Error while deleting product categories");
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
          <h2>Show all products categories</h2>
        </Col>

        <Col xsm={6} xxsm={12} className="text-end m-auto">
          <Link to="/productcategories/create">
            <Button
              type="submit"
              variant="outline-success"
              className=" rounded-pill"
              onClick={""}
            >
              <i class="fa fa-cart-plus" aria-hidden="true"></i>{" "}
              <span className="ms-1">Create Product Categories</span>
            </Button>
          </Link>
        </Col>
      </Row>

      <Row className="mx-2 justify-content-center">
        <Col md={6}>
          <Table
            responsive
            striped
            bordered
            hover
            className="mb-5 text-xsm-center text-md-start m-auto"
          >
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Product Category Name</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myData.map((post, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{post.name}</td>

                    <td className="">
                      {/* <Link className="text-decoration-none">
                        <i
                          class="fa fa-edit text-success"
                          aria-hidden="true"
                        ></i>
                      </Link> */}

                      <Link
                        className="text-decoration-none"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            `Do you really want to delete ${post.name} ?`
                          );

                          if (confirmBox === true) {
                            deleteProductById(post._id);
                            loadShowPages();
                          }
                        }}
                      >
                        <i
                          class="fa fa-trash text-danger ms-4"
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

export default ShowAllProductCategories;
