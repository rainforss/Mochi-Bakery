import React from "react";
import { Accordion, Card, Col, Container, Form, Button } from "react-bootstrap";

const BillingInfo = ({ formik }) => {
  console.log(formik.values);
  return (
    <Container className="py-4 billing-container" fluid>
      <h2 style={{ fontSize: "1.7rem" }}>Payment detail</h2>
      <Accordion className="py-4" defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Credit / debit card
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} xs="8" controlId="cardNumber">
                    <Form.Label>Card number</Form.Label>
                    <Form.Control
                      type="text"
                      pattern="[0-9.]+"
                      maxLength="16"
                      name="cardNumber"
                      onChange={formik.handleChange}
                      value={formik.values.cardNumber}
                      placeholder="4242 4242 4242 4242"
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs="4" controlId="cvc">
                    <Form.Label>CVC (CVV)</Form.Label>
                    <Form.Control
                      type="number"
                      maxLength="3"
                      name="cvc"
                      onChange={formik.handleChange}
                      value={formik.values.cvc}
                      placeholder="123"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} xs="4" controlId="expMonth">
                    <Form.Label>Exp. Month</Form.Label>
                    <Form.Control
                      type="number"
                      maxLength="2"
                      name="expMonth"
                      onChange={formik.handleChange}
                      value={formik.values.expMonth}
                      placeholder="MM"
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs="4" controlId="expYear">
                    <Form.Label>Exp. Year</Form.Label>
                    <Form.Control
                      type="number"
                      maxLength="4"
                      name="expYear"
                      onChange={formik.handleChange}
                      value={formik.values.expYear}
                      placeholder="YYYY"
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs="4" controlId="billingPostalCode">
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="6"
                      name="billingPostalCode"
                      onChange={formik.handleChange}
                      value={formik.values.billingPostalCode}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default BillingInfo;
