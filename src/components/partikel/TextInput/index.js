import React from "react";
import { Form } from "react-bootstrap";

function TextInput({ name, value, type, onChange, placeholder, className }) {
  return (
    <Form.Control
      type={type}
      name={name}
      value={value} // state
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
}

export default TextInput;
