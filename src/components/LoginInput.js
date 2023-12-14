import React from "react";
import SButton from "../components/partikel/Button";
import TextInputWithLabel from "../components/partikel/TextInputWithLabel";
import { Form } from "react-bootstrap";

export default function SFORM({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <div className="pt-50">
        <TextInputWithLabel
          label={"Email"}
          placeholder={"Masukan email"}
          name="email"
          value={form?.email}
          type="email"
          onChange={handleChange}
          className="text-lg form-control rounded-5"
        />
      </div>

      <div className="pt-30">
        <TextInputWithLabel
          label={"Password"}
          placeholder={"Masukan password"}
          name="password"
          value={form?.password}
          type="password"
          onChange={handleChange}
          className="text-lg form-control rounded-5"
        />
      </div>

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <SButton
          loading={isLoading}
          disabled={isLoading}
          variant="primary"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-5 p-2"
          action={handleSubmit}
        >
          Continue to Sign In
        </SButton>
      </div>
    </Form>
  );
}
