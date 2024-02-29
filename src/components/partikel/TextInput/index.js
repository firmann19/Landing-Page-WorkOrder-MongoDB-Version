import React from "react";
import { Form } from "react-bootstrap";
import "../../../styles/Approval.css";

function TextInput({
  name,
  value,
  type,
  onChange,
  placeholder,
  className,
  readOnly,
  disabled,
}) {
  return (
    <Form.Control
      type={type}
      name={name}
      value={value} // state
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      readOnly={readOnly}
      disabled={disabled}
    />
  );
}

export default TextInput;
