import React from "react";
import { Col, Row } from "react-bootstrap";

const CategoryShowcase = ({ categories }) => {
  return (
    <div className="popular-categories">
      <h3>Mochi's famous</h3>
      <Row className="w-100 py-4">
        {categories.map((category) => (
          <Col xs={6} key={category.id}>
            {category.name}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryShowcase;
