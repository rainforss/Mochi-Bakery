import React, { useState, useEffect } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import useContentful from "../../hooks/useContentful";
import starGenerator from "../../lib/starGenerator";

const ReviewModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reviews, setReviews] = useState([]);
  const loadReviews = async () => {
    const entries = await useContentful(false).getEntries({
      content_type: "review",
      locale: "*",
    });
    setReviews([...entries.items]);
  };
  useEffect(() => {
    loadReviews();
  }, [show]);
  return (
    <>
      <Button block variant="primary" onClick={handleShow} className="mt-4">
        Show all reviews
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className="review-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Customer reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {reviews.map((review) => (
              <ListGroup.Item key={review.sys.id}>
                <div className="d-flex align-items-center">
                  {starGenerator(review.fields.rating["en-US"])}
                  <span className="mx-1">
                    {review.fields.rating["en-US"]}/5
                  </span>
                  <span className="mx-1">
                    By{" "}
                    {review.fields.customerName["en-US"]
                      ? review.fields.customerName["en-US"]
                      : "Anonymous"}
                  </span>
                </div>
                <p>{review.fields.productReview["en-US"]}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewModal;
