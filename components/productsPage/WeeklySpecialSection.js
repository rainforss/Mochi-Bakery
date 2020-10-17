import React from "react";
import { Card, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useRouter } from "next/router";

const WeeklySpecialSection = ({ weeklySpecials, addItemToCart }) => {
  const router = useRouter();
  return (
    <Container className="weekly-special">
      <h2 className="weekly-special-heading my-4">Weekly specials</h2>
      <Row>
        {weeklySpecials.map((product) => (
          <Col sm={6} key={product.id} className="px-4">
            <Card className="border-bottom-turquoise mb-5">
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
                    dangerouslySetInnerHTML={{
                      __html: `${product.description}`,
                    }}
                  ></div>
                </Card.Text>
                <div className="row my-3"></div>
                <Row className="my-3">
                  <Col>
                    <Button
                      variant="info"
                      onClick={() =>
                        router.push(`/products/${product.permalink}`)
                      }
                      name={product.id}
                    >
                      The making
                    </Button>
                  </Col>
                  <Col className="text-right">
                    <Button
                      name={product.id}
                      onClick={addItemToCart}
                      variant="outline-secondary"
                    >
                      Add to cart
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WeeklySpecialSection;
