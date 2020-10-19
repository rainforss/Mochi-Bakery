import React from "react";
import { Col, Container, Form } from "react-bootstrap";
import useSWR from "swr";

const ShippingInfo = ({ checkoutToken, formik }) => {
  const { data: availableCountry, mutate: getCountry } = useSWR(
    `https://api.chec.io/v1/services/locale/${checkoutToken.id}/countries`
  );

  const { data: availableSub, mutate: getSub } = useSWR(
    `https://api.chec.io/v1/services/locale/${checkoutToken.id}/countries/CA/subdivisions`
  );

  const { data: shippingMethods, mutate: getShippingMethods } = useSWR(
    `https://api.chec.io/v1/checkouts/${checkoutToken.id}/helper/shipping_options?country=CA&region=AB`
  );

  console.log(formik.values);
  return (
    <Container className="py-5" fluid>
      <Form className="w-100">
        <h2 className="mb-5" style={{ fontSize: "1.7rem" }}>
          Customer and shipping details
        </h2>
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First name*</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="John"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="middleName">
            <Form.Label>Middle name (optional)</Form.Label>
            <Form.Control
              type="text"
              name="middleName"
              onChange={formik.handleChange}
              value={formik.values.middleName}
              placeholder=""
            />
          </Form.Group>
          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last name*</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              placeholder="Doe"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="country">
            <Form.Label>Country*</Form.Label>
            <Form.Control
              as="select"
              name="country"
              onChange={formik.handleChange}
              value={formik.values.country}
            >
              <option value="" disabled>
                --Country--
              </option>
              {availableCountry
                ? Object.entries(availableCountry.countries).map(
                    ([code, name]) => (
                      <option value={code} key={code}>
                        {name}
                      </option>
                    )
                  )
                : null}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="province">
            <Form.Label>Province*</Form.Label>
            <Form.Control
              as="select"
              name="province"
              onChange={formik.handleChange}
              value={formik.values.province}
            >
              <option value="" disabled>
                --Province--
              </option>
              {availableSub
                ? Object.entries(availableSub.subdivisions).map(
                    ([code, name]) => (
                      <option value={code} key={code}>
                        {name}
                      </option>
                    )
                  )
                : null}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="city">
            <Form.Label>City*</Form.Label>
            <Form.Control
              type="text"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              placeholder="Edmonton"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="postalCode">
            <Form.Label>Postal code*</Form.Label>
            <Form.Control
              type="text"
              name="postalCode"
              onChange={formik.handleChange}
              value={formik.values.postalCode}
              placeholder="Postal code"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="address1">
            <Form.Label>Address Line 1*</Form.Label>
            <Form.Control
              type="text"
              name="address1"
              onChange={formik.handleChange}
              value={formik.values.address1}
              placeholder="1234 1Ave NW"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="address2">
            <Form.Label>Address Line 2 (optional)</Form.Label>
            <Form.Control
              type="text"
              name="address2"
              onChange={formik.handleChange}
              value={formik.values.address2}
              placeholder="Apartment, studio, or floor"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="phoneNumber">
            <Form.Label>Phone number*</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              placeholder="7801234567"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="emailAddress">
            <Form.Label>Email address*</Form.Label>
            <Form.Control
              type="email"
              name="emailAddress"
              onChange={formik.handleChange}
              value={formik.values.emailAddress}
              placeholder="john@doe.com"
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="shippingMethod">
          <Form.Label>Shipping method*</Form.Label>
          <Form.Control
            as="select"
            name="shippingMethod"
            onChange={formik.handleChange}
            value={formik.values.shippingMethod}
            placeholder="Select a shipping method"
          >
            <option value="" disabled>
              --Choose shipping--
            </option>
            {shippingMethods
              ? shippingMethods.map((method) => (
                  <option value={method.id} key={method.id}>
                    {method.description}
                  </option>
                ))
              : null}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="orderNotes">
          <Form.Label>Order notes (optional)</Form.Label>
          <Form.Control
            as="textarea"
            name="orderNotes"
            onChange={formik.handleChange}
            value={formik.values.orderNotes}
            placeholder="Your preferred location for pickup..."
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ShippingInfo;
