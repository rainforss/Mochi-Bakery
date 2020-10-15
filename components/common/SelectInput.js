import React from "react";
import { Form } from "react-bootstrap";

const SelectInput = ({ label, name, id, onChange, value }) => {
  const options = [];
  for (var i = 1; i <= value + 5; i++) {
    options.push(i);
  }
  return (
    <Form.Group>
      <Form.Label htmlFor={id}>{label}</Form.Label>
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
    </Form.Group>
  );
};

export default SelectInput;
