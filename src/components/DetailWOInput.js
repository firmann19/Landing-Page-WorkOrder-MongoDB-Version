import React from "react";
import { Col, Form, Row } from "react-bootstrap";

function HistoryWOInput({ form, handleChange }) {
  return (
    <Form method="post" className="form-register">
      <Row className="mt-4 mb-4">
        <Col className="ms-2">
          <Form.Label className="text-lg fw-medium">User</Form.Label>
          <Form.Control
            name="UserRequest"
            value={form?.UserRequest}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>

        <Col className="me-3">
          <Form.Label className="text-lg fw-medium">Nama Peralatan</Form.Label>
          <Form.Control
            name="namaBarang"
            value={form?.NamaBarang}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col className="ms-2">
          <Form.Label className="text-lg fw-medium">Departemen</Form.Label>
          <Form.Control
            name="Departement"
            value={form?.Departement}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>

        <Col className="me-3">
          <Form.Label className="text-lg fw-medium">Kode Peralatan</Form.Label>
          <Form.Control
            name="KodeBarang"
            value={form?.KodeBarang}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col className="ms-2">
          <Form.Label className="text-lg fw-medium">
            Tanggal Work Order
          </Form.Label>
          <Form.Control
            name="Date_RequestWO"
            value={form?.Date_RequestWO}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>

        <Col className="me-3">
          <Form.Label className="text-lg fw-medium">
            Tanggal Pengerjaan
          </Form.Label>
          <Form.Control
            name="Date_CompletionWO"
            value={form?.Date_CompletionWO}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label className="text-lg fw-medium">Permasalahan</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={form?.Permasalahan}
          disabled
          readOnly
        />
      </Form.Group>

      <Row className="mt-4">
        <Col className="ms-3">
          <Form.Label className="text-lg fw-medium">Tindakan :</Form.Label>
        </Col>
        <Col>
          <Form.Check // prettier-ignore
            type={"checkbox"}
            id={``}
            label={`Perbaikan`}
          />
        </Col>

        <Col className="me-3">
          <Form.Check // prettier-ignore
            type={"checkbox"}
            id={``}
            label={`Pergantian`}
          />
        </Col>

        <Col className="me-3">
          <Form.Check // prettier-ignore
            type={"checkbox"}
            id={``}
            label={`Request_Data`}
          />
        </Col>

        <Col className="me-3">
          <Form.Check // prettier-ignore
            type={"checkbox"}
            id={``}
            label={`Others`}
          />
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          id="tindakan"
          name="Tindakan"
          value={form?.Tindakan}
          onChange={handleChange}
          disabled
          readOnly
        />
      </Form.Group>

      <Form.Group className="mb-4 mt-4">
        <Form.Label className="text-lg fw-medium">
          Sparepart yang diganti
        </Form.Label>
        <Form.Control
          id="gantiSparepart"
          name="GantiSparepart"
          value={form?.GantiSparepart}
          onChange={handleChange}
          as="textarea"
          rows={3}
          disabled
          readOnly
        />
      </Form.Group>

      <Row className="mt-4 mb-4">
        <Col className="ms-2">
          <Form.Label className="text-lg fw-medium">Pemohon</Form.Label>
          <Form.Control
            name="UserRequest"
            value={form?.UserRequest}
            type="text"
            onChange={handleChange}
            readOnly
            disabled
          />
        </Col>

        <Col className="ms-2">
          <Form.Label className="text-lg fw-medium">Disetujui</Form.Label>
          <Form.Control
            name="UserApprove"
            value={form?.UserApprove}
            type="text"
            onChange={handleChange}
            readOnly
            disabled
          />
        </Col>

        <Col className="ms-2">
          <Form.Label className="text-lg fw-medium">Dikerjakan Oleh</Form.Label>
          <Form.Control
            name="StaffIT"
            value={form?.StaffIT}
            type="text"
            onChange={handleChange}
            readOnly
            disabled
          />
        </Col>

        <Col className="ms-2">
          <Form.Label className="text-lg fw-medium">Diketahui</Form.Label>
          <Form.Control
            name="HeadIT"
            value={form?.HeadIT}
            type="text"
            onChange={handleChange}
            readOnly
            disabled
          />
        </Col>
      </Row>
    </Form>
  );
}

export default HistoryWOInput;
