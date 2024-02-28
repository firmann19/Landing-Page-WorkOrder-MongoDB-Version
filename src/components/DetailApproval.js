import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import TextInputWithLabel from "./partikel/TextInputWithLabel";

function DetailApproval({ form }) {
  return (
    <Form method="post" className="form-register">
      <Row className="mt-2 d-flex flex-wrap">
        <Col xs={12} md={6} className="mb-3 flex-column">
          <TextInputWithLabel
            label={"User"}
            name="UserRequest"
            isClearable={true}
            value={form?.UserRequest}
          />
        </Col>

        <Col xs={12} md={6} className="mb-3 flex-column">
          <TextInputWithLabel
            label={"Nama Peralatan"}
            name="NamaBarang"
            isClearable={true}
            value={form?.NamaBarang}
          />
        </Col>
      </Row>

      <Row className="mt-2 d-flex flex-wrap">
        <Col xs={12} md={6} className="mb-3 flex-column">
          <TextInputWithLabel
            label={"Departement"}
            name="Departement"
            isClearable={true}
            value={form?.Departement}
          />
        </Col>

        <Col xs={12} md={6} className="mb-3 flex-column">
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

      <Row className="mt-3 d-flex flex-wrap">
        <Col xs={12} md={6} className="mb-3 flex-column">
          <TextInputWithLabel
            label={"Nama Atasan"}
            name="UserApprove"
            isClearable={true}
            value={form?.UserApprove}
          />
        </Col>

        <Col xs={12} md={6} className="mb-3 flex-column">
          <TextInputWithLabel
            label={"Tanggal Work Order"}
            name="Date_RequestWO"
            isClearable={true}
            value={form?.Date_RequestWO}
          />
        </Col>
      </Row>

      <Row className="mb-4 text-lg fw-medium">
        <Col xs={12} md={6}>
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
