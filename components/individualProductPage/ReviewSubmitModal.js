import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
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
  errors,
  loading,
}) => {
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
          <Form noValidate>
            <Form.Group controlId="rating">
              <Form.Label>Your Rating</Form.Label>
              {starGenerator(rating, captureStar, true)}
              <Form.Control
                className="d-none"
                isInvalid={errors.rating && true}
              />
              <Form.Control.Feedback type={errors.rating ? "invalid" : "valid"}>
                {errors.rating}
              </Form.Control.Feedback>
            </Form.Group>
            <TextInput
              label="Your Comment"
              name="comment"
              id="comment"
              value={comment}
              type="textarea"
              onChange={onChange}
              error={errors.comment}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {loading ? (
            <Button variant="primary" disabled>
              Submitting ...
            </Button>
          ) : (
            <Button variant="primary" type="submit" onClick={onSubmit}>
              Submit
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewSubmitModal;
