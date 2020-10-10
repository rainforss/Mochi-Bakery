import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <Container
        fluid
        className="copy-right d-flex justify-content-between align-items-center bg-color-turquoise"
      >
        <div>Authentic sweets each handcrafted with love of bakery</div>
        <div>&copy; 2020 Mochi's Bakery</div>
      </Container>
    </div>
  );
};

export default Footer;
