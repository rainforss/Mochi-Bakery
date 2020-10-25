import React from "react";
import { Row, Col } from "react-bootstrap";

const SocialMedias = () => {
  return (
    <div className="social-medias">
      <h3>Follow us</h3>
      <Row className="w-100 py-4 mr-0">
        <Col xs={3}>
          <a href="#" className="external-link text-right">
            Instagram
          </a>
        </Col>
        <Col xs={3}>
          <a href="#" className="external-link">
            Facebook
          </a>
        </Col>
        <Col xs={3}>
          <a href="#" className="external-link">
            Wechat
          </a>
        </Col>
        <Col xs={3}>
          <a href="#" className="external-link">
            Youtube
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default SocialMedias;
