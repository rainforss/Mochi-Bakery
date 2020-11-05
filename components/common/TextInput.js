import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ label, name, id, onChange, value, type }) => {
  return (
    <Form.Group className="my-0">
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        as={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      ></Form.Control>
    </Form.Group>
  );
};

export default TextInput;
