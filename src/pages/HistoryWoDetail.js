import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import HistoryWOInput from "../components/DetailWOInput";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getData } from "../utils/fetch";

function HistoryWoDetail() {
  const { id } = useParams();

  const [form, setForm] = useState({
    UserRequest: "",
    Departement: "",
    NamaBarang: "",
    KodeBarang: "",
    Permasalahan: "",
    UserApprove: "",
    Date_RequestWO: "",
    Tindakan: "",
    GantiSparepart: "",
    HeadIT: "",
    StaffIT: "",
    Date_CompletionWO: "",
  });

  const fetchOneWO = async () => {
    const res = await getData(`/checkout/${id}`);
    console.log("test", res);

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
      Tindakan: res.data.data.Tindakan,
      GantiSparepart: res.data.data.GantiSparepart,
      HeadIT: res.data.data.HeadIT.nama,
      StafIT: res.data.data.StaffIT.nama,
      Date_CompletionWO: moment(res.data.data.Date_CompletionWO).format(
        "DD-MM-YYYY, h:mm:ss a"
      ),
    });
  };

  useEffect(() => {
    fetchOneWO();
  }, []);

  return (
    <>
      <div className="workOrder overflow-auto h-screen">
        <Navbar />
        <div className="pt-lg-100 pb-5 mb-3 responsive-form-checkout workOrder mx-auto">
          <Card style={{ width: "60%" }} className="m-auto mt-5 mb-5">
            <Card.Body>
              <h1 className="text-4xl fw-bold text-center color-palette-1 mb-10">
                Work Order
              </h1>
              <HistoryWOInput form={form} />
            </Card.Body>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HistoryWoDetail;
