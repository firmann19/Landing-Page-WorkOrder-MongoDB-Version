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
        <Col className="">
          <Form.Label className="label">User</Form.Label>
          <Form.Control
            name="nama"
            value={user}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>

        <Col className="">
          <Form.Label className="label">Nama Peralatan</Form.Label>
          <Form.Control
            name="NamaBarang"
            value={form?.NamaBarang}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col className="">
          <Form.Label className="label">Departemen</Form.Label>
          <Form.Control
            name="namaDepartement"
            value={namaDepartement}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>

        <Col className="">
          <Form.Label className="label">Kode Peralatan</Form.Label>
          <Form.Control
            name="KodeBarang"
            value={form?.KodeBarang}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Form.Group className="mb-3  ">
        <Form.Label className="label">Permasalahan</Form.Label>
        <Form.Control
          id="permasalahan"
          as="textarea"
          name="Permasalahan"
          rows={3}
          value={form?.Permasalahan}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="mt-4 selectBox">
        <div className="relative label">
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

      <div className="text-center mb-3 mt-4">
        <SButton
          className="btn-createWO rounded-5"
          loading={isLoading}
          disabled={isLoading}
          action={handleSubmit}
          style={{ width: "100%" }} // Menentukan lebar tombol menjadi 100%
        >
          Submit
        </SButton>
      </div>
    </Form>
  );
}

export default CreateWoInput;
