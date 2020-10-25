import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BillingInfo from "../components/checkoutPage/BillingInfo";
import OrderInfo from "../components/checkoutPage/OrderInfo";
import ShippingInfo from "../components/checkoutPage/ShippingInfo";
import Layout from "../components/Layout";

import commerce from "../lib/commerce";
import serverCookies from "cookies";
import { useFormik } from "formik";

export const getServerSideProps = async ({ req, res }) => {
  const cookies = new serverCookies(req, res);
  console.log(cookies.get("commercejs_cart_id"));
  const checkoutToken = await commerce.checkout.generateTokenFrom(
    "cart",
    cookies.get("commercejs_cart_id")
  );

  //Get the cart live object while setting tax zone instead of the static one for checkout information
  const cart = await commerce.checkout.getLive(checkoutToken.id);
  return { props: { checkoutToken, cart: cart } };
};

const checkout = ({ checkoutToken, cart }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      country: "",
      province: "",
      city: "",
      postalCode: "",
      address1: "",
      address2: "",
      phoneNumber: "",
      emailAddress: "",
      shippingMethod: "",
      orderNotes: "",
      cardNumber: "",
      cvc: "",
      expYear: "",
      expMonth: "",
      billingPostalCode: "",
      gateway: "test_gateway",
    },
    onSubmit: async (values) => {
      const returnedData = await commerce.checkout.capture(checkoutToken.id, {
        line_items: { ...cart.line_items },
        customer: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.emailAddress,
        },
        shipping: {
          name: `${values.firstName} ${values.lastName}`,
          country: values.country,
          street: `${values.address1} ${values.address2}`,
          town_city: values.city,
          county_state: values.province,
          postal_zip_code: values.postalCode,
        },
        fulfillment: {
          shipping_method: values.shippingMethod,
        },
        payment: {
          gateway: values.gateway,
          card: {
            number: values.cardNumber,
            expiry_month: values.expMonth,
            expiry_year: values.expYear,
            cvc: values.cvc,
            postal_zip_code: values.billingPostalCode,
          },
        },
      });
    },
  });
  return (
    <Layout>
      <Container className="checkout-body">
        <Row>
          <Col sm={7}>
            <ShippingInfo checkoutToken={checkoutToken} formik={formik} />
            <BillingInfo formik={formik} />
          </Col>
          <Col sm={5}>
            <OrderInfo cart={cart} />
          </Col>
          <Col sm={7}>
            <Button
              className="my-5 mx-auto"
              variant="success"
              block
              onClick={formik.handleSubmit}
            >
              Make Payment
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default checkout;
