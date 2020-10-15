import React, { useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import { StarFill, StarHalf } from "react-bootstrap-icons";

const ReviewModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <ListGroup.Item>
              <div className="d-flex align-items-center">
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarHalf className="mx-1" />
                <span className="mx-1">4.5/5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                blandit tortor vel turpis mollis tincidunt. In a tempor ipsum,
                vel pharetra augue. Curabitur lacinia, est a condimentum
                gravida, quam nulla mollis nibh, auctor sodales orci libero eget
                risus. Nulla egestas elit in hendrerit tincidunt. Ut
                sollicitudin risus arcu, non imperdiet leo scelerisque ac.
                Integer porta auctor congue. Cras semper mi mauris, vitae
                lacinia ante feugiat ut. Quisque libero nulla, viverra vitae
                viverra sed, sodales eu dui.{" "}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex align-items-center">
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarHalf className="mx-1" />
                <span className="mx-1">4.5/5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                blandit tortor vel turpis mollis tincidunt. In a tempor ipsum,
                vel pharetra augue. Curabitur lacinia, est a condimentum
                gravida, quam nulla mollis nibh, auctor sodales orci libero eget
                risus. Nulla egestas elit in hendrerit tincidunt. Ut
                sollicitudin risus arcu, non imperdiet leo scelerisque ac.
                Integer porta auctor congue. Cras semper mi mauris, vitae
                lacinia ante feugiat ut. Quisque libero nulla, viverra vitae
                viverra sed, sodales eu dui.{" "}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex align-items-center">
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarHalf className="mx-1" />
                <span className="mx-1">4.5/5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                blandit tortor vel turpis mollis tincidunt. In a tempor ipsum,
                vel pharetra augue. Curabitur lacinia, est a condimentum
                gravida, quam nulla mollis nibh, auctor sodales orci libero eget
                risus. Nulla egestas elit in hendrerit tincidunt. Ut
                sollicitudin risus arcu, non imperdiet leo scelerisque ac.
                Integer porta auctor congue. Cras semper mi mauris, vitae
                lacinia ante feugiat ut. Quisque libero nulla, viverra vitae
                viverra sed, sodales eu dui.{" "}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex align-items-center">
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarHalf className="mx-1" />
                <span className="mx-1">4.5/5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                blandit tortor vel turpis mollis tincidunt. In a tempor ipsum,
                vel pharetra augue. Curabitur lacinia, est a condimentum
                gravida, quam nulla mollis nibh, auctor sodales orci libero eget
                risus. Nulla egestas elit in hendrerit tincidunt. Ut
                sollicitudin risus arcu, non imperdiet leo scelerisque ac.
                Integer porta auctor congue. Cras semper mi mauris, vitae
                lacinia ante feugiat ut. Quisque libero nulla, viverra vitae
                viverra sed, sodales eu dui.{" "}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex align-items-center">
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarHalf className="mx-1" />
                <span className="mx-1">4.5/5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                blandit tortor vel turpis mollis tincidunt. In a tempor ipsum,
                vel pharetra augue. Curabitur lacinia, est a condimentum
                gravida, quam nulla mollis nibh, auctor sodales orci libero eget
                risus. Nulla egestas elit in hendrerit tincidunt. Ut
                sollicitudin risus arcu, non imperdiet leo scelerisque ac.
                Integer porta auctor congue. Cras semper mi mauris, vitae
                lacinia ante feugiat ut. Quisque libero nulla, viverra vitae
                viverra sed, sodales eu dui.{" "}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex align-items-center">
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarFill className="mx-1" />
                <StarHalf className="mx-1" />
                <span className="mx-1">4.5/5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                blandit tortor vel turpis mollis tincidunt. In a tempor ipsum,
                vel pharetra augue. Curabitur lacinia, est a condimentum
                gravida, quam nulla mollis nibh, auctor sodales orci libero eget
                risus. Nulla egestas elit in hendrerit tincidunt. Ut
                sollicitudin risus arcu, non imperdiet leo scelerisque ac.
                Integer porta auctor congue. Cras semper mi mauris, vitae
                lacinia ante feugiat ut. Quisque libero nulla, viverra vitae
                viverra sed, sodales eu dui.{" "}
              </p>
            </ListGroup.Item>
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
