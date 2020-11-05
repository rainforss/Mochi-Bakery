import { useSession } from "next-auth/client";
import React, { useState } from "react";
import { Button, Form, ListGroup, Modal } from "react-bootstrap";
import useContentful from "../../hooks/useContentful";
import starGenerator from "../../lib/starGenerator";
import TextInput from "../common/TextInput";

const ReviewSubmitModal = ({
  session,
  show,
  handleShow,
  handleClose,
  rating,
  comment,
  onChange,
  captureStar,
  onSubmit,
}) => {
  // const [session, loading] = useSession();
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");

  // const captureStar = (e) => {
  //   setRating(parseInt(e.currentTarget.getAttribute("name")));
  // };
  // const onSubmit = async () => {
  //   const entry = await useContentful(true).createEntry("review", {
  //     fields: {
  //       permalink: { "en-US": permalink },
  //       productName: { "en-US": productName },
  //       rating: { "en-US": rating },
  //       customerName: { "en-US": session.user.name },
  //       productReview: { "en-US": comment },
  //     },
  //   });
  //   const published = await entry.publish();
  // };
  return (
    <>
      {session ? (
        <Button block variant="secondary" onClick={handleShow}>
          Leave a review
        </Button>
      ) : (
        <Button block variant="info" disabled>
          Login to review
        </Button>
      )}
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className="review-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="rating">
              <Form.Label>Your Rating</Form.Label>
              {starGenerator(rating, captureStar, true)}
            </Form.Group>
            <TextInput
              label="Your Comment"
              name="comment"
              id="comment"
              value={comment}
              type="textarea"
              onChange={onChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewSubmitModal;
