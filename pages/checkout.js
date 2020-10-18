import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BillingInfo from "../components/checkoutPage/BillingInfo";
import OrderInfo from "../components/checkoutPage/OrderInfo";
import ShippingInfo from "../components/checkoutPage/ShippingInfo";
import Layout from "../components/Layout";

import commerce from "../lib/commerce";
import serverCookies from "cookies";
import useSWR from "swr";

export const getServerSideProps = async ({ req, res }) => {
  const cookies = new serverCookies(req, res);
  console.log(cookies.get("commercejs_cart_id"));
  const checkoutToken = await commerce.checkout.generateTokenFrom(
    "cart",
    cookies.get("commercejs_cart_id")
  );

  //Get the cart live object instead of the static one for checkout information
  const cart = await commerce.checkout.getLive(checkoutToken.id);
  return { props: { checkoutToken, cart } };
};

const checkout = ({ checkoutToken, cart }) => {
  const { data: buyerLocation } = useSWR(
    `https://api.chec.io/v1/checkouts/${checkoutToken.id}/helper/location_from_ip`
  );
  useSWR(
    () =>
      `https://api.chec.io/v1/checkouts/${checkoutToken.id}/helper/set_tax_zone?ip_address=${buyerLocation.ip_address}`
  );
  console.log(buyerLocation);
  return (
    <Layout>
      <Container className="checkout-body" fluid>
        <Row>
          <Col sm={5} className="offset-1">
            <ShippingInfo checkoutToken={checkoutToken} />
            <BillingInfo />
            <Button className="my-5" variant="success" block>
              Make Payment
            </Button>
          </Col>
          <Col sm={4} className="offset-1">
            <OrderInfo buyer cart={cart} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default checkout;
