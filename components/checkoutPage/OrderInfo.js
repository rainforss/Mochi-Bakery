import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

const OrderInfo = ({ cart }) => {
  console.log(cart);
  return (
    <Container fluid className="my-5 px-4 order-info-container">
      <h3 className="py-4">Purchasing items</h3>
      <ListGroup variant="flush">
        {cart
          ? cart.line_items.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="py-4"
                style={{ backgroundColor: "honeydew" }}
              >
                <Row>
                  <Col xs={3}>
                    <Image src={item.media.source} thumbnail></Image>
                  </Col>
                  <Col
                    xs={9}
                    className="d-flex flex-column justify-content-between"
                  >
                    <div className="d-flex justify-content-between">
                      <span>{item.name}</span>
                      <span>{item.price.formatted_with_code}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Quantity: {item.quantity}</span>
                      <span>Total: {item.line_total.formatted_with_code}</span>
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          : null}
      </ListGroup>
      <div>
        <div>
          <span>Subtotal</span>
          <span>{cart ? cart.subtotal.formatted_with_code : ""}</span>
        </div>
        <div>
          <span>Tax</span>
          <span>{cart ? cart.tax.amount.formatted_with_code : ""}</span>
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </Container>
  );
};

export default OrderInfo;
