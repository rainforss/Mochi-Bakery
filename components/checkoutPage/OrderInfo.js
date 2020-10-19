import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

const OrderInfo = ({ cart }) => {
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
      <div className="mt-3 pb-4">
        <div className="d-flex justify-content-between">
          <span>Subtotal:</span>
          <span>{cart ? cart.subtotal.formatted_with_code : ""}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Tax:</span>
          <span>
            {cart ? `${(cart.subtotal.raw * 0.05).toFixed(2)} CAD` : ""}
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Shipping:</span>
          <span>0 CAD</span>
        </div>
      </div>
      <div
        className="text-right pt-3 pb-5 font-weight-bolder"
        style={{ borderTop: "2px lightgrey solid", fontSize: "1.3rem" }}
      >
        <span>
          Total amount:{" "}
          {cart ? `${(cart.subtotal.raw * 1.05).toFixed(2)} CAD` : ""}
        </span>
      </div>
    </Container>
  );
};

export default OrderInfo;
