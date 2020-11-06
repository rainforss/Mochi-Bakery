import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ label, name, id, onChange, value, type, error }) => {
  return (
    <Form.Group className="my-0">
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        as={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        isInvalid={error && true}
      ></Form.Control>
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default TextInput;
