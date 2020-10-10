import React from "react";
import { Row, Col } from "react-bootstrap";

const SocialMedias = () => {
  return (
    <div className="social-medias">
      <h3>Follow us</h3>
      <Row className="w-100">
        <Col sm={6}>
          <a href="#" className="external-link">
            Instagram
          </a>
        </Col>
        <Col sm={6}>
          <a href="#" className="external-link">
            Facebook
          </a>
        </Col>
        <Col sm={6}>
          <a href="#" className="external-link">
            Wechat
          </a>
        </Col>
        <Col sm={6}>
          <a href="#" className="external-link">
            Youtube
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default SocialMedias;
