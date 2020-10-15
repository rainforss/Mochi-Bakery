import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import ReviewModal from "./ReviewModal";

const CustomerReviews = () => {
  return (
    <Container className="py-5">
      <h4 className="my-3">Recent customer reviews</h4>
      <Row className="w-100 mx-auto">
        <Col sm={6} className="customer-review p-2">
          <div className="d-flex align-items-center">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <span className="mx-1">4.5/5</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit
            tortor vel turpis mollis tincidunt. In a tempor ipsum, vel pharetra
            augue. Curabitur lacinia, est a condimentum gravida, quam nulla
            mollis nibh, auctor sodales orci libero eget risus. Nulla egestas
            elit in hendrerit tincidunt. Ut sollicitudin risus arcu, non
            imperdiet leo scelerisque ac. Integer porta auctor congue. Cras
            semper mi mauris, vitae lacinia ante feugiat ut. Quisque libero
            nulla, viverra vitae viverra sed, sodales eu dui.{" "}
          </p>
        </Col>
        <Col sm={6} className="customer-review p-2">
          <div className="d-flex align-items-center">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <span className="mx-1">4.5/5</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit
            tortor vel turpis mollis tincidunt. In a tempor ipsum, vel pharetra
            augue. Curabitur lacinia, est a condimentum gravida, quam nulla
            mollis nibh, auctor sodales orci libero eget risus. Nulla egestas
            elit in hendrerit tincidunt. Ut sollicitudin risus arcu, non
            imperdiet leo scelerisque ac. Integer porta auctor congue. Cras
            semper mi mauris, vitae lacinia ante feugiat ut. Quisque libero
            nulla, viverra vitae viverra sed, sodales eu dui.{" "}
          </p>
        </Col>
      </Row>
      <Row className="w-100 mx-auto">
        <Col sm={6} className="customer-review p-2">
          <div className="d-flex align-items-center">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <span className="mx-1">4.5/5</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit
            tortor vel turpis mollis tincidunt. In a tempor ipsum, vel pharetra
            augue. Curabitur lacinia, est a condimentum gravida, quam nulla
            mollis nibh, auctor sodales orci libero eget risus. Nulla egestas
            elit in hendrerit tincidunt. Ut sollicitudin risus arcu, non
            imperdiet leo scelerisque ac. Integer porta auctor congue. Cras
            semper mi mauris, vitae lacinia ante feugiat ut. Quisque libero
            nulla, viverra vitae viverra sed, sodales eu dui.{" "}
          </p>
        </Col>
        <Col sm={6} className="customer-review p-2">
          <div className="d-flex align-items-center">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <span className="mx-1">4.5/5</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit
            tortor vel turpis mollis tincidunt. In a tempor ipsum, vel pharetra
            augue. Curabitur lacinia, est a condimentum gravida, quam nulla
            mollis nibh, auctor sodales orci libero eget risus. Nulla egestas
            elit in hendrerit tincidunt. Ut sollicitudin risus arcu, non
            imperdiet leo scelerisque ac. Integer porta auctor congue. Cras
            semper mi mauris, vitae lacinia ante feugiat ut. Quisque libero
            nulla, viverra vitae viverra sed, sodales eu dui.{" "}
          </p>
        </Col>
      </Row>
      <ReviewModal />
    </Container>
  );
};

export default CustomerReviews;
