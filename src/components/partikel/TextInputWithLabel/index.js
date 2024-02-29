import React from "react";
import { Form } from "react-bootstrap";
import TextInput from "../TextInput";
import "../../../styles/Approval.css"

function TextInputWithLabel({
  label,
  name,
  value, // state
  type,
  onChange,
  placeholder,
  className,
  readOnly,
  disabled
}) {
  return (
    <Form.Group className="mb-2">
      <Form.Label className="label">{label}</Form.Label>
      <TextInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        readOnly={readOnly}
        disabled={disabled}
      />
    </Form.Group>
  );
}

export default TextInputWithLabel;
