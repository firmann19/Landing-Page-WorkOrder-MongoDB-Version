/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ApproveInput from "../components/ApproveInput";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getData, putData } from "../utils/fetch";
import { Card } from "react-bootstrap";
import DetailApproval from "../components/DetailApproval";
import moment from "moment";
import { setNotif } from "../redux/notif/actions";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Approval() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [form, setForm] = useState({
    UserRequest: "",
    Departement: "",
    NamaBarang: "",
    KodeBarang: "",
    Permasalahan: "",
    UserApprove: "",
    Date_RequestWO: "",
    StatusWO: "",
    otp: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchOneWO = async () => {
    const res = await getData(`/checkout/${id}`);

    setForm({
      ...form,
      UserRequest: res.data.data.UserRequest.nama,
      Departement: res.data.data.Departement.namaDepartement,
      NamaBarang: res.data.data.NamaBarang,
      KodeBarang: res.data.data.KodeBarang,
      Permasalahan: res.data.data.Permasalahan,
      UserApprove: res.data.data.UserApprove.nama,
      Date_RequestWO: moment(res.data.data.Date_RequestWO).format(
        "DD-MM-YYYY, h:mm:ss a"
      ),
      StatusWO: res.data.data.StatusWO,
    });
  };

  useEffect(() => {
    fetchOneWO();
  }, []);

  async function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      UserRequest: form.UserRequest,
      Departement: form.Departement,
      NamaBarang: form.NamaBarang,
      KodeBarang: form.KodeBarang,
      Permasalahan: form.Permasalahan,
      UserApprove: form.UserApprove,
      Date_RequestWO: form.Date_RequestWO,
      otp: form.otp,
      StatusWO: form.StatusWO,
    };

    const res = await putData(`/checkout/${id}/statuswo/`, payload);
    if (res?.data?.data) {
      dispatch(setNotif(true, "success", `berhasil update status Work Order`));
      navigate("/list-wo");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.msg,
      });
    }
  };

  return (
    <>
      <Navbar />
      <section class="approval workOrder mx-auto">
        <div class="row">
          <div class="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
            <div class="container mx-auto">
              <div className="text-center">
                <ApproveInput
                  form={form}
                  isLoading={isLoading}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
          <div class="col-xxl-7 col-lg-6 bg-blue pt-lg-145 pb-lg-145 d-lg-block d-none">
            <Card style={{ width: "80%" }} className="m-auto mt-5 mb-5">
              <Card.Body>
                <Card.Title className="text-center mb-5">Work Order</Card.Title>
                <DetailApproval form={form} />
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Approval;
