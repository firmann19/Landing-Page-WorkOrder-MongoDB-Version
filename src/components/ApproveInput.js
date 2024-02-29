import React from "react";
import { Form } from "react-bootstrap";
import SButton from "./partikel/Button";

function ApproveInput({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <>
          <h1 className="title text-4xl text-center color-palette-1 mb-10">
            Approval
          </h1>
          <p className="label-approveInput mt-2 mb-4 text-center">
            Silahkan masukan kode otp untuk <br /> persetujuan Work Order.
          </p>
          <Form.Control
            name="otp"
            className="form-control mb-4"
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
    </>
  );
}

export default ApproveInput;
