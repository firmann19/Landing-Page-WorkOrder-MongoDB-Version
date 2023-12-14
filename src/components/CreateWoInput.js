import React from "react";
import SButton from "./partikel/Button";
import SelectBox from "./partikel/SelectBox";
import { Col, Form, Row } from "react-bootstrap";

function CreateWoInput({
  form,
  lists,
  handleChange,
  handleSubmit,
  isLoading,
  user,
  namaDepartement,
}) {
  return (
    <Form method="post" className="form-create-wo">
      <Row className="mt-4 mb-4">
        <Col className="ms-3">
          <Form.Label className="text-lg fw-medium">User</Form.Label>
          <Form.Control
            name="nama"
            value={user}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>

        <Col className="me-3">
          <Form.Label className="text-lg fw-medium">Nama Peralatan</Form.Label>
          <Form.Control
            name="NamaBarang"
            value={form?.NamaBarang}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col className="ms-3">
          <Form.Label className="text-lg fw-medium">Departemen</Form.Label>
          <Form.Control
            name="namaDepartement"
            value={namaDepartement}
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
          />
        </Col>
      </Row>

      <Form.Group className="mb-3 ms-3 me-3">
        <Form.Label className="text-lg fw-medium">Permasalahan</Form.Label>
        <Form.Control
          id="permasalahan"
          as="textarea"
          name="Permasalahan"
          rows={3}
          value={form?.Permasalahan}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="mt-4 ms-3" style={{ width: "30%" }}>
        <div className="relative text-lg fw-medium">
          <SelectBox
            label={"Disetujui"}
            placeholder={"Pilih nama atasan"}
            name="UserApprove"
            isClearable={true}
            value={form.UserApprove}
            options={lists.users}
            handleChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div className="text-center text-lg fw-medium mb-3 mt-3">
        <SButton
          className="btn-createWO"
          loading={isLoading}
          disabled={isLoading}
          action={handleSubmit}
          variant="danger"
        >
          Submit
        </SButton>
      </div>
    </Form>
  );
}

export default CreateWoInput;
