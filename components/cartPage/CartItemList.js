import React from "react";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import SelectInput from "../common/SelectInput";

const CartItemList = ({ cart, removeItem, onChange }) => {
  return (
    <Container className="cart-item-list">
      <h2 className="shop-cart-heading my-4">
        {cart.total_items === 0
          ? "Your cart is empty, grab something real quick"
          : "Your shopping cart"}
      </h2>
      <ListGroup variant="flush">
        {cart
          ? cart.line_items
            ? cart.line_items.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col sm={6} className="my-4 d-flex image-section">
                      <Image
                        className="checkout-image"
                        src={item.media.source}
                        thumbnail
                      />
                    </Col>
                    <Col
                      sm={6}
                      className="my-4 d-flex flex-column justify-content-around align-items-center"
                      style={{ minHeight: "8rem" }}
                    >
                      <Row className="w-100">
                        <Col className="my-auto">
                          <h4 style={{ fontSize: "1.2rem", marginBottom: "0" }}>
                            {item.name}
                          </h4>
                        </Col>
                        <Col className="my-auto">
                          <SelectInput
                            name={item.id}
                            id={item.id}
                            label="Quantity"
                            value={item.quantity}
                            onChange={onChange}
                          />
                        </Col>
                      </Row>
                      <Row className="w-100">
                        <Col className="my-auto">
                          <div style={{ fontSize: "1rem" }}>
                            Item total: {item.line_total.raw} CAD
                          </div>
                        </Col>
                        <Col className="text-right">
                          <Button
                            // className="position-absolute"
                            // style={{ right: "1.25rem", bottom: "0.75rem" }}
                            name={item.id}
                            variant="outline-danger"
                            onClick={removeItem}
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            : null
          : null}
      </ListGroup>
    </Container>
  );
};

export default CartItemList;
