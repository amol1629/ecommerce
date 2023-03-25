// import React from 'react';
// import { Button, Card, Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const SearchResultCardPage = ({ searchData }) => {
//   return (
//     <Container
//       fluid
//       className=" align-items-center my-4 customer-homepage-main-container p-4"
//     >
//       <Row className="mb-3 category-card-main-div justify-content-center justify align-items-center">
//         <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
//           <Link className="text-decoration-none ">
//             <Card className=" border all_product_category_card border-white text-center">
//               <Card.Img
//                 variant="top"
//                 src={searchData.productImageUrl}
//                 className="category-card-image px-2 pt-4"
//               />
//               <Card.Body>
//                 <Card.Title className=" card-title fs-6 mb-2">
//                   {searchData.productName}
//                 </Card.Title>

//                 <p className=" py-2 fw-bold fst-italic">
//                   <span className="me-2 px-2 py-1 bg-warning rounded-pill">
//                     <i className="fa px-1 fa-gift" aria-hidden="true"></i>
//                     {searchData.productOffers}
//                   </span>

//                   <span className="me-3 text-danger">
//                     {" "}
//                     &#x20B9; {searchData.productPrice}
//                   </span>
//                 </p>

//                 <p className="text-warning">
//                   <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
//                   <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
//                   <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
//                   <i className="ps-2 fa fa-star fa-sm" aria-hidden="true"></i>
//                 </p>

//                 <Link to={"/products/" + searchData._id}>
//                   <Button variant="outline-success rounded-pill me-3">
//                     Details
//                   </Button>
//                 </Link>

//                 <Button variant="outline-info rounded-pill">Buy Now</Button>
//               </Card.Body>
//             </Card>
//           </Link>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SearchResultCardPage;
