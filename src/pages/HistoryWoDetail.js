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
    selectedAction: "",
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
      selectedAction: res.data.data.selectedAction,
    });
  };

  useEffect(() => {
    fetchOneWO();
  }, []);

  const downloadPDF = () => {
    const input = document.getElementById("pdf-content");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 10, 10, width - 20, height - 20); // Add margin on each side
      pdf.save("history_wo.pdf");
    });
  };

  const printDocument = () => {
    const input = document.getElementById("pdf-content");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const printWindow = window.open("", "_blank");
      printWindow.document.open();
      printWindow.document.write(
        "<html><head><title>Work Order</title></head><body>"
      );
      printWindow.document.write(
        `<img id="print-img" src="${imgData}" style="width: 100%; height: auto;" />`
      );
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.document.getElementById("print-img").onload = () => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      };
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
              <button onClick={printDocument} className="btn btn-secondary">
                <i className="icon-printer"></i> Print
              </button>
            </div>
          </div>

          <Card
            id="pdf-content"
            style={{
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Card.Body
              style={{
                backgroundColor: "white",
                borderColor: "white",
                borderRadius: "10px",
              }}
            >
              <h1 className="title text-center mb-10">Work Order</h1>
              <div className="border-top border-gray-200 pt-4 mt-4">
                <HistoryWOInput form={form} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HistoryWoDetail;
