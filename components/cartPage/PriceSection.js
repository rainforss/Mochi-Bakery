import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PriceSection = ({ cart }) => {
  if (!cart || cart.total_items === 0) {
    return null;
  }
  console.log(cart);
  return (
    <Container className="border-top-turquoise pt-3 pb-5">
      <Row>
        <Col></Col>
        <Col sm={5}>
          <Row>
            <Col>Subtotal:</Col>
            <Col className="text-right">
              {cart.subtotal.formatted_with_code}
            </Col>
          </Row>
          <Row>
            <Col>Shipping:</Col>
            <Col className="text-right">Free delivery in town</Col>
          </Row>
          <Row>
            <Col>Estimated GST:</Col>
            <Col className="text-right">
              {(cart.subtotal.raw * 0.05).toFixed(2)} CAD
            </Col>
          </Row>
          <Row
            className="font-weight-bold border-top-turquoise mt-3 pt-3"
            style={{ fontSize: "1.2rem" }}
          >
            <Col>Estimated total</Col>
            <Col className="text-right">
              {(cart.subtotal.raw * 1.05).toFixed(2)} CAD
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PriceSection;
