import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";

function SelectBox({
  name,
  options,
  value,
  placeholder,
  handleChange,
  label,
}) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Select
        name={name}
        placeholder={placeholder}
        options={options}
        onChange={handleChange}
        value={value}
      />
    </Form.Group>
  );
}

export default SelectBox;
