import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import TextInputWithLabel from "./partikel/TextInputWithLabel";

function DetailApproval({form}) {
  return (
    <Form method="post" className="form-register">
      <Row className="mt-4 mb-4 text-lg fw-medium">
        <Col className="ms-2">
          <TextInputWithLabel
            label={"User"}
            name="UserRequestId"
            isClearable={true}
            value={form?.UserRequestId}
          />
        </Col>

        <Col className="me-3">
          <TextInputWithLabel
            label={"Nama Peralatan"}
            name="NamaBarang"
            isClearable={true}
            value={form?.namaBarang}
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4 text-lg fw-medium">
        <Col className="ms-2">
          <TextInputWithLabel
            label={"Departement"}
            name="DepartUserId"
            isClearable={true}
            value={form?.DepartUserId}
          />
        </Col>

        <Col className="me-3">
          <TextInputWithLabel
            label={"Kode Peralatan"}
            name="kodeBarang"
            isClearable={true}
            value={form?.kodeBarang}
          />
        </Col>
      </Row>

      <Form.Label className="text-lg fw-medium">Permasalahan</Form.Label>
      <Form.Control 
         id="permasalahan"
         as="textarea"
         name="permasalahan"
         rows={2}
         value={form?.permasalahan}
      />

      <Row className="mt-4 mb-4 text-lg fw-medium">
        <Col className="ms-2">
          <TextInputWithLabel
            label={"Nama Atasan"}
            name="UserApproveId"
            isClearable={true}
            value={form?.UserApproveId}
          />
        </Col>

        <Col className="me-3">
          <TextInputWithLabel
            label={"Tanggal Work Order"}
            name="date_requestWO"
            isClearable={true}
            value={form?.date_requestWO}
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
