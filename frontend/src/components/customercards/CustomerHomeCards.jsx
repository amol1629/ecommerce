import "./CustomerHomeCards.css";

import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import GetProductByCategory from "../getproductbycategory/GetProductByCategory";

const CustomerHomeCards = () => {
  const [myData, setMyData] = useState([]);
  const [electronics, setElectronics] = useState(false);
  const [fashions, setFashions] = useState(false);
  const [isError, setIsError] = useState("");
  const [pcid, setId] = useState("640caec93e091db55e7baf9c");

  function setIdfunction(_id) {
    setId(_id);
    console.log("Home page", pcid);
  }

  const imageArray = [
    // image for electronics
    "https://t3.ftcdn.net/jpg/01/70/80/52/360_F_170805293_mP8dwQvg7ip4tFRyXNs7xhIs470dBArn.jpg",

    // image for fashion
    "https://cdn.ceoworld.biz/wp-content/uploads/2021/05/SUSTAINABLE-FASHION.jpg",

    // image for mobile
    "https://www.datocms-assets.com/27942/1658759999-elegant-smartphone-composition-1-edited.png?auto=format&w=840",

    // image for grocery
    "https://mishry.com/wp-content/uploads/2019/06/packaged-food-brands.png",

    // image for beauty
    "https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2021/03/25141343/Boddess.png?ssl=1",

    // image for books:
    "https://static01.nyt.com/images/2020/10/30/books/00NOVEMBERBOOKS/00NOVEMBERBOOKS-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  ];

  useEffect(() => {}, [pcid]);

  const loadAllCategories = () => {
    axios
      .get(`http://localhost:4040/productcategories`)
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  };

  useEffect(() => {
    loadAllCategories();
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-center mb-2">
        {myData.map((post, key) => {
          return (
            <Col
              key={key}
              className="my-4 customer-home-card text-center py-3 mx-3 mb-4"
              md={3}
            >
              <Link
                className="text-decoration-none"
                onClick={(e) => {
                  setIdfunction(post._id);
                }}
              >
                <img
                  // src="https://www.lovelocal.com/wp-content/uploads/2019/10/fashion-category-photo-292x245.png"
                  // className="image-fluid"
                  src={imageArray[key]}
                  // className="image-fluid"
                  // onClick={(e) => setElectronics(true)}
                  alt=""
                />
                <h5 className="mt-3 text-center card-title">{post.name}</h5>
              </Link>
            </Col>
          );
        })}
      </Row>
      <GetProductByCategory id={pcid} />
    </Container>
  );
};

export default CustomerHomeCards;
