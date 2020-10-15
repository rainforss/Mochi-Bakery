import React from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import { Plus, StarFill, StarHalf } from "react-bootstrap-icons";

const ProductDetail = ({ product }) => {
  return (
    <Container fluid>
      <div className="d-flex align-items-center">
        <StarFill className="mx-1" />
        <StarFill className="mx-1" />
        <StarFill className="mx-1" />
        <StarFill className="mx-1" />
        <StarHalf className="mx-1" />
        <span className="mx-1">4.5/5</span>
      </div>
      <h4>{product.name}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: product.description,
        }}
      ></div>
      <Button block variant="secondary" className="my-4">
        Add to cart
      </Button>
      <Accordion className="pt-2">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} block variant="link" eventKey="0">
              <div className="d-flex justify-content-between align-items-center">
                Product ingredients
                <Plus size="1.5rem" />
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Accordion.Toggle as={Button} block variant="link" eventKey="1">
              <div className="d-flex justify-content-between align-items-center">
                Shippings and returns
                <Plus size="1.5rem" />
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default ProductDetail;
