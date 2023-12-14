import React from 'react'
import { Card } from 'react-bootstrap'
import ApproveInput from '../components/ApproveInput'
import DetailApproval from '../components/DetailApproval'

function Approval() {
  return (
    <section class="approval mx-auto">
      <div class="row">
        <div class="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <div class="container mx-auto">
            <div className="text-center">
              <ApproveInput
                /* form={form}
                isLoading={isLoading}
                handleChange={handleChange}
                handleSubmit={handleSubmit} */
              />
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-lg-6 bg-blue pt-lg-145 pb-lg-145 d-lg-block d-none" style={{ backgroundColor: "#1A1640" }}>
          <Card style={{ width: "80%" }} className="m-auto mt-5 mb-5">
            <Card.Body>
              <h1 className="fw-bold text-4xl color-palette-1 text-center mb-3">Work Order</h1>
              <DetailApproval />
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Approval