import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import ReviewModal from "./ReviewModal";
import ReviewSubmitModal from "./ReviewSubmitModal";
import starGenerator from "../../lib/starGenerator";
import useContentful from "../../hooks/useContentful";
import { useSession } from "next-auth/client";

const CustomerReviews = ({ reviews, permalink, productName }) => {
  const [session, loading] = useSession();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [rating, setRating] = useState(0);

  const [comment, setComment] = useState("");

  const [reviewList, setReviewList] = useState([...reviews.items]);

  const captureStar = (e) => {
    setRating(parseInt(e.currentTarget.getAttribute("name")));
  };

  const onSubmit = async () => {
    const entry = await useContentful(true).createEntry("review", {
      fields: {
        permalink: { "en-US": permalink },
        productName: { "en-US": productName },
        rating: { "en-US": rating },
        customerName: { "en-US": session.user.name },
        productReview: { "en-US": comment },
      },
    });

    const published = await entry.publish();
    console.log(reviewList);
    console.log(published);
    setReviewList([...reviewList, published]);
    console.log(reviewList);
    setShow(false);
  };

  return (
    <Container className="py-5">
      <h4 className="my-3">Recent customer reviews</h4>
      <Row className="w-100 mx-auto">
        {reviewList.map((review, index) => {
          if (index <= 3)
            return (
              <Col key={review.sys.id} sm={6} className="customer-review p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    {starGenerator(review.fields.rating["en-US"])}
                    <span className="mx-1">
                      {review.fields.rating["en-US"]}/5
                    </span>
                  </span>

                  <span className="mx-1">
                    By{" "}
                    {review.fields.customerName["en-US"]
                      ? review.fields.customerName["en-US"]
                      : "Anonymous"}
                  </span>
                </div>
                <p>{review.fields.productReview["en-US"]}</p>
              </Col>
            );
        })}
      </Row>
      <ReviewModal />
      <ReviewSubmitModal
        productName={productName}
        permalink={permalink}
        session={session}
        onSubmit={onSubmit}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        rating={rating}
        comment={comment}
        captureStar={captureStar}
      />
    </Container>
  );
};

export default CustomerReviews;
