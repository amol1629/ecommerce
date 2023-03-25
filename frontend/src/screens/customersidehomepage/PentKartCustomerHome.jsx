import React from "react";
import { Container } from "react-bootstrap";

import CustomerHomeCards from "../../components/customercards/CustomerHomeCards";
import CustomerNavigation from "../../components/navigation/customernavigation/CustomerNavigation";

const PentKartCustomerHome = (props) => {
  return (
    <Container fluid>
      <CustomerNavigation status={props.status} />
      <CustomerHomeCards />
    </Container>
  );
};

export default PentKartCustomerHome;
