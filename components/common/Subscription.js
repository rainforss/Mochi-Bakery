import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const Subscription = () => {
  return (
    <div className="subscription">
      <h3>Never miss a batch</h3>
      <InputGroup className="w-50">
        <FormControl
          className="sub-input"
          aria-label="Email address"
          placeholder="Enter your email"
          style={{ borderRight: "none" }}
        />
        <InputGroup.Append>
          <InputGroup.Text
            className="sub-button"
            style={{ backgroundColor: "transparent" }}
          >
            <ArrowRight />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Subscription;
