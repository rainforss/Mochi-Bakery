import React from "react";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";
import DumpCart from "./DumpCart";

const CartControl = ({ emptyCart, checkOut, shown }) => {
  return (
    <>
      <Container className="cart-control">
        <Row>
          <Col className="text-left">
            <Link href="/products">
              <Button variant="secondary">Continue shopping</Button>
            </Link>
          </Col>
          <Col className="text-right">
            <Button variant="primary" className={shown ? "" : "d-none"}>
              Check out
            </Button>
          </Col>
        </Row>
      </Container>
      <DumpCart emptyCart={emptyCart} shown={shown} />
    </>
  );
};

export default CartControl;
