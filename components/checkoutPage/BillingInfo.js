import React from "react";
import { Accordion, Card, Col, Container, Form, Button } from "react-bootstrap";

const BillingInfo = () => {
  return (
    <Container className="py-5 billing-container" fluid>
      <h2>Payment detail</h2>
      <Accordion className="py-4" defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              First payment method
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
                      defaultValue="4242 4242 4242 4242"
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs="4" controlId="cvv">
                    <Form.Label>CVC (CVV)</Form.Label>
                    <Form.Control
                      type="number"
                      maxLength="3"
                      defaultValue="123"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} xs="4" controlId="expMonth">
                    <Form.Label>Exp. Month</Form.Label>
                    <Form.Control
                      type="number"
                      maxLength="2"
                      placeholder="MM"
                      defaultValue="11"
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs="4" controlId="expYear">
                    <Form.Label>Exp. Year</Form.Label>
                    <Form.Control
                      type="number"
                      maxLength="4"
                      placeholder="YYYY"
                      defaultValue="2023"
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
