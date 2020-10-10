import React from "react";
import { Card, Container, Row, Col, Button, Badge } from "react-bootstrap";

const WeeklySpecialSection = ({ weeklySpecials, addItemToCart }) => {
  return (
    <Container className="weekly-special">
      <h2 className="weekly-special-heading my-4">Weekly specials</h2>
      <Row>
        {weeklySpecials.map((product) => (
          <Col sm={6} key={product.id} className="px-4">
            <Card className="border-bottom-turquoise">
              <Card.Img src={product.media.source} />
              <Card.Body>
                <Row>
                  <Col xs={8}>
                    <Card.Title>{product.name}</Card.Title>
                  </Col>
                  <Col xs={4} className="text-right">
                    <Badge variant="info" style={{ fontSize: "1rem" }}>
                      {product.price.formatted_with_symbol}
                    </Badge>
                  </Col>
                </Row>

                <Card.Text className="py-3">
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></div>
                </Card.Text>
                <div className="d-flex justify-content-between my-3">
                  <Button variant="info">The making</Button>
                  <Button name={product.id} onClick={addItemToCart} variant="outline-secondary">Order it</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WeeklySpecialSection;
