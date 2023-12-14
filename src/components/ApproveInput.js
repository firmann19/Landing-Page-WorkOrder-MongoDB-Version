import React from "react";
import { Card, Form } from "react-bootstrap";
import SButton from "./partikel/Button";

function ApproveInput({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <>
      <Card
        className="bg-light"
        style={{ width: "30rem", height: "20rem" }}
      >
        <Card.Body>
          <h1 className="text-4xl text-center fw-bold color-palette-1 mb-10">
            Approval
          </h1>
          <p className=" mt-2 mb-4 text-center text-lg color-palette-1 m-0">
            Silahkan masukan kode otp untuk <br /> persetujuan Work Order.
          </p>
          <Form.Control
            name="otp"
            className="approval-input"
            type="text"
            value={form?.otp}
            onChange={handleChange}
          />
          <SButton
            loading={isLoading}
            disabled={isLoading}
            action={handleSubmit}
            className="btn-approval"
          >
            Approval
          </SButton>
        </Card.Body>
      </Card>
    </>
  );
}

export default ApproveInput;
