import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import HistoryWOInput from "../components/DetailWOInput";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getData } from "../utils/fetch";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
      StaffIT: res.data.data.StaffIT.nama,
      Date_CompletionWO: moment(res.data.data.Date_CompletionWO).format(
        "DD-MM-YYYY, h:mm:ss a"
      ),
    });
  };

  useEffect(() => {
    fetchOneWO();
  }, []);

  const downloadPDF = () => {
    const input = document.getElementById("pdf-content");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 10, 10, width - 20, height - 20); // Add margin on each side
      pdf.save("history_wo.pdf");
    });
  };

  return (
    <>
      <Navbar />
      <div
        className="workOrder overflow-auto h-screen"
        style={{
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: "30px",
        }}
      >
        <div className="pt-lg-100 pb-5 mb-3 workOrder mx-auto">
          <div className="save d-flex justify-content-end mb-2">
            <div className="p-2">
              <button className="btn btn-primary" onClick={downloadPDF}>
                <i className="icon-download"></i> Download
              </button>
            </div>
            <div className="p-2">
              <a href="#" className="btn btn-secondary">
                <i className="icon-printer"></i> Print
              </a>
            </div>
          </div>

          <Card
            id="pdf-content"
            style={{
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Bayangan pada setiap sisi
              borderRadius: "10px", // Sudut bulatan pada kartu
              border: "0",
            }}
          >
            <Card.Body style={{ backgroundColor: "white", borderColor: "white"}}>
              <h1 className="title text-center mb-10">Work Order</h1>
              <HistoryWOInput form={form} />
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HistoryWoDetail;
