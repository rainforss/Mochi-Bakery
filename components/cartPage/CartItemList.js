import React from "react";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import SelectInput from "../common/SelectInput";

const CartItemList = ({ cart, removeItem, onChange }) => {
  return (
    <Container className="cart-item-list">
      <h2 className="shop-cart-heading my-4">Your shopping cart</h2>
      <ListGroup variant="flush">
        {cart
          ? cart.line_items
            ? cart.line_items.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col>
                      <Image
                        className="checkout-image"
                        src={item.media.source}
                        thumbnail
                      />
                    </Col>
                    <Col>
                      <h4 style={{ fontSize: "1.2rem" }}>{item.name}</h4>
                      <SelectInput
                        name={item.id}
                        id={item.id}
                        label="Quantity"
                        value={item.quantity}
                        onChange={onChange}
                      />
                      <Button
                        name={item.id}
                        variant="outline-danger"
                        onClick={removeItem}
                      >
                        Remove
                      </Button>
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
