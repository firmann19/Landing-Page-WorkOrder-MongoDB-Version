import React from 'react'
import SButton from "../components/partikel/Button";
import TextInputWithLabel from "../components/partikel/TextInputWithLabel";
import { Form } from "react-bootstrap";

function ContactUsInput() {
  return (
    <Form>
      <div className="text-name">
        <TextInputWithLabel
          label={"Nama"}
          placeholder={"Masukan Nama"}
          name="name"
         /* value={form?.name} */
          type="name"
         /* onChange={handleChange} */
          className="text-lg form-control rounded-2"
        />
      </div>

      <div className="text-email">
        <TextInputWithLabel
          label={"Email"}
          placeholder={"Masukan email"}
          name="email"
         /* value={form?.email} */
          type="email"
         /* onChange={handleChange} */
          className="text-lg form-control rounded-2"
        />
      </div>

      <Form.Group className="text-desc">
        <Form.Label className="text-lg fw-reguler">Pesan</Form.Label>
        <Form.Control
          id="pesan"
          as="textarea"
          name="pesan"
          placeholder='masukan pesan disini....'
          rows={3}
        //   value={form?.Permasalahan}
        //   onChange={handleChange}
        />
      </Form.Group>

      <div className="text-center text-lg fw-medium mb-3 mt-3">
        <SButton
          className="btn-contactus"
          variant="primary"
        //   loading={isLoading}
        //   disabled={isLoading}
        //   action={handleSubmit}
        >
          Submit
        </SButton>
      </div>
    </Form>
  )
}

export default ContactUsInput