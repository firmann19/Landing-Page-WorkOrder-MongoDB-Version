import React from "react";
import { Alert } from "react-bootstrap";

function SAlert({ message, type, className }) {
  return <Alert variant={type} className={className}>{message}</Alert>;
}

export default SAlert;
