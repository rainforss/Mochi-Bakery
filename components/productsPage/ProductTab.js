import React, { useState } from "react";
import { Container, Tab, Tabs, Col, Row, Card, Badge, Button } from "react-bootstrap";

const ProductTab = ({ categories,inSeasonProducts }) => {
  const copy = [...categories];
  const index = copy.findIndex(
    (category) => category.name === "Weekly Specials"
  );

  copy.splice(index, 1);
 const [key,setKey]=useState(copy[0].slug)
  return (
    <Container>
      <h2 className="category-tab-heading">All sweets and bakeries</h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {copy.map((option) => (
          <Tab key={option.slug} eventKey={option.slug} title={option.name}>

      <Row className="mt-4">
        {inSeasonProducts.map((product) => { if(product.categories[0].slug===option.slug)  
          {return(<Col sm={6} key={product.id} className="px-4">
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
                  <Button variant="outline-secondary">Order it</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>)}
})}
      </Row>

          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default ProductTab;
