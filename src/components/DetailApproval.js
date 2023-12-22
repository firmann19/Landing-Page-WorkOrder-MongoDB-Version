import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import TextInputWithLabel from "./partikel/TextInputWithLabel";

function DetailApproval({ form }) {
  return (
    <Form method="post" className="form-register">
      <Row className="mt-4 mb-4 text-lg fw-medium">
        <Col className="ms-2">
          <TextInputWithLabel
            label={"User"}
            name="UserRequest"
            isClearable={true}
            value={form?.UserRequest}
          />
        </Col>

        <Col className="me-3">
          <TextInputWithLabel
            label={"Nama Peralatan"}
            name="NamaBarang"
            isClearable={true}
            value={form?.NamaBarang}
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4 text-lg fw-medium">
        <Col className="ms-2">
          <TextInputWithLabel
            label={"Departement"}
            name="Departement"
            isClearable={true}
            value={form?.Departement}
          />
        </Col>

        <Col className="me-3">
          <TextInputWithLabel
            label={"Kode Peralatan"}
            name="KodeBarang"
            isClearable={true}
            value={form?.KodeBarang}
          />
        </Col>
      </Row>

      <Form.Label className="text-lg fw-medium">Permasalahan</Form.Label>
      <Form.Control
        id="Permasalahan"
        as="textarea"
        name="Permasalahan"
        rows={2}
        value={form?.Permasalahan}
      />

      <Row className="mt-4 mb-4 text-lg fw-medium">
        <Col className="ms-2">
          <TextInputWithLabel
            label={"Nama Atasan"}
            name="UserApprove"
            isClearable={true}
            value={form?.UserApprove}
          />
        </Col>

        <Col className="me-3">
          <TextInputWithLabel
            label={"Tanggal Work Order"}
            name="Date_RequestWO"
            isClearable={true}
            value={form?.Date_RequestWO}
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4 w-1/2 mx-auto text-lg fw-medium">
        <Col className="me-3">
          <TextInputWithLabel
            label={"Status"}
            name="StatusWO"
            isClearable={true}
            value={form?.StatusWO}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default DetailApproval;
