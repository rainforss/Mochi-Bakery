import React, { useState } from "react";
import {
  Container,
  Tab,
  Tabs,
  Col,
  Row,
  Card,
  Badge,
  Button,
} from "react-bootstrap";
import { useRouter } from "next/router";

const ProductTab = ({ categories, inSeasonProducts, addItemToCart }) => {
  const copy = [...categories];
  const index = copy.findIndex(
    (category) => category.name === "Weekly Specials"
  );

  copy.splice(index, 1);
  const [key, setKey] = useState(copy[0].slug);
  const router = useRouter();
  return (
    <Container className="category-tab">
      <h2 className="category-tab-heading">All sweets and bakeries</h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {copy.map((option) => (
          <Tab key={option.slug} eventKey={option.slug} title={option.name}>
            <Row className="mt-4">
              {inSeasonProducts.map((product) => {
                if (product.categories[0].slug === option.slug) {
                  return (
                    <Col sm={6} key={product.id} className="px-4">
                      <Card className="border-bottom-turquoise mb-5">
                        <Card.Img src={product.media.source} />
                        <Card.Body>
                          <Row>
                            <Col xs={8}>
                              <Card.Title>{product.name}</Card.Title>
                            </Col>
                            <Col xs={4} className="text-right">
                              <Badge
                                variant="info"
                                style={{ fontSize: "1rem" }}
                              >
                                {product.price.formatted_with_symbol}
                              </Badge>
                            </Col>
                          </Row>

                          <Card.Text className="py-3">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: product.description,
                              }}
                            ></div>
                          </Card.Text>
                          <div className="gap"></div>
                          <Row className="my-3">
                            <Col>
                              <Button
                                onClick={() =>
                                  router.push(`/products/${product.permalink}`)
                                }
                                variant="info"
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
                  );
                }
              })}
            </Row>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default ProductTab;
