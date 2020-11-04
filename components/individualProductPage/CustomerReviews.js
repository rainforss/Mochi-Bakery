import { useSession } from "next-auth/client";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";
import ReviewModal from "./ReviewModal";

const CustomerReviews = ({ reviews }) => {
  const [session, loading] = useSession();
  const starGenerator = (value) => {
    const stars = [];
    for (var i = 0; i < 5; i++) {
      if (value - i >= 1) {
        stars.push(<StarFill className="mx-1" />);
      } else {
        stars.push(<Star className="mx-1" />);
      }
    }
    return stars.map((star) => star);
  };

  return (
    <Container className="py-5">
      <h4 className="my-3">Recent customer reviews</h4>
      <Row className="w-100 mx-auto">
        {reviews.items.map((review, index) => {
          if (index <= 3)
            return (
              <Col key={review.sys.id} sm={6} className="customer-review p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    {starGenerator(review.fields.rating)}
                    <span className="mx-1">{review.fields.rating}/5</span>
                  </span>

                  <span className="mx-1">
                    By{" "}
                    {review.fields.customerName
                      ? review.fields.customerName
                      : "Anonymous"}
                  </span>
                </div>
                <p>{review.fields.productReview}</p>
              </Col>
            );
        })}
      </Row>
      <ReviewModal />
      {session && (
        <Button block variant="primary">
          Leave a review
        </Button>
      )}
    </Container>
  );
};

export default CustomerReviews;
