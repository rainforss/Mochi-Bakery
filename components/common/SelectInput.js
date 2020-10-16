import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const SelectInput = ({ label, name, id, onChange, value }) => {
  const options = [];
  for (var i = 1; i <= value + 5; i++) {
    options.push(i);
  }
  return (
    <Form.Group as={Row} className="my-0">
      <Form.Label column className="offset-2" xs={4} htmlFor={id}>
        {label}
      </Form.Label>
      <Col xs={6}>
        <Form.Control
          as="select"
          name={name}
          id={id}
          onChange={onChange}
          value={value}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Control>
      </Col>
    </Form.Group>
  );
};

export default SelectInput;
