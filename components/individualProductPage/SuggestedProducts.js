import Link from "next/link";
import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const SuggestedProducts = ({ similarProducts, showHeading, shown }) => {
  if (!similarProducts || !shown) {
    return null;
  } else {
    return (
      <Container className="suggested-products pt-5">
        {showHeading ? (
          <h3 className="py-5 text-center">
            We also recommend trying these out
          </h3>
        ) : null}
        <Row>
          {similarProducts.map((product) => (
            <Col sm={4} key={product.id} className="px-4">
              <Card className="border-bottom-turquoise">
                <Link href={`/products/${product.permalink}`}>
                  <Card.Img
                    className="internal-link"
                    src={product.media.source}
                  />
                </Link>
                <Card.Body>
                  <Row>
                    <Col xs={8}>
                      <Link href={`/products/${product.permalink}`}>
                        <Card.Title
                          className="my-auto internal-link"
                          style={{ fontSize: "1rem" }}
                        >
                          {product.name}
                        </Card.Title>
                      </Link>
                    </Col>
                    <Col
                      xs={4}
                      className="d-flex justify-content-end align-items-center"
                    >
                      <Badge variant="info" style={{ fontSize: "0.8rem" }}>
                        {product.price.formatted_with_symbol}
                      </Badge>
                    </Col>
                  </Row>

                  <Card.Text className="py-3" style={{ fontSize: "0.8rem" }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default SuggestedProducts;
