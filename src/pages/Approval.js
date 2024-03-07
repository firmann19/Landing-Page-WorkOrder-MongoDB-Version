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
import SAlert from "../components/partikel/Alert";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    // Fungsi untuk menangani klik di luar elemen formulir kontak
    function handleClickOutside(event) {
      const contactForm = document.getElementById("contactForm");

      if (contactForm && !contactForm.contains(event.target)) {
        setContactFormVisible(false);
      }
    }

    // Fungsi untuk melakukan fetch data Work Order
    async function fetchOneWO() {
      try {
        const res = await getData(`/checkout/${id}`);
        const {
          UserRequest,
          Departement,
          NamaBarang,
          KodeBarang,
          Permasalahan,
          UserApprove,
          Date_RequestWO,
          StatusWO,
        } = res.data.data;
        setForm({
          UserRequest: UserRequest.nama,
          Departement: Departement.namaDepartement,
          NamaBarang,
          KodeBarang,
          Permasalahan,
          UserApprove: UserApprove.nama,
          Date_RequestWO: moment(Date_RequestWO).format(
            "DD-MM-YYYY, h:mm:ss a"
          ),
          StatusWO,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Fungsi untuk menambahkan event listener saat komponen dimount
    document.addEventListener("mouseup", handleClickOutside);

    // Panggil fungsi fetchOneWO saat komponen dimount
    fetchOneWO();

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };

    // Tidak ada dependensi yang diubah, sehingga array dependensi kosong
  }, []); // Menambahkan array dependensi kosong karena ini akan dijalankan sekali saat komponen dimount

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.otp) {
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: "OTP belum di input",
      });
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const payload = { ...form, otp: form.otp };
    const res = await putData(`/checkout/${id}/statuswo/`, payload);

    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil update status Work Order`
        )
      );
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

  const handleContactClick = () => {
    setContactFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <Navbar />
      <div
        className="workOrder overflow-auto h-screen"
        style={{
          minHeight: "95vh",
        }}
      >
        <Card
          className="mx-auto mt-5"
          style={{
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Bayangan pada setiap sisi
            borderRadius: "10px 10px 0 0", // Sudut bulatan pada kartu
          }}
        >
          <h2 className="title text-center mt-3">Work Order</h2>
          <div className="border-top border-gray-200 pt-4 mt-4">
            <DetailApproval form={form} />
          </div>
        </Card>
        <button
          id="approve"
          href="#!"
          className="btn btn-dark btn-lg card-footer-btn text-uppercase-bold-sm hover-lift-light w-100 d-flex justify-content-center"
          onClick={handleContactClick}
        >
          <span className="svg-icon text-white me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <title>ionicons-v5-g</title>
              <path
                d="M336,208V113a80,80,0,0,0-160,0v95"
                style={{
                  fill: "none",
                  stroke: "#000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
              ></path>
              <rect
                x="96"
                y="208"
                width="320"
                height="272"
                rx="48"
                ry="48"
                style={{
                  fill: "none",
                  stroke: "#000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
              ></rect>
            </svg>
          </span>
          Approve
        </button>
        {/* Contact form */}
        {isContactFormVisible && (
          <div
            id="approveForm"
            style={{ display: "block" /* your styling for contact form */ }}
          >
            <div className="m-auto" style={{ width: "100%" }}>
              {alert.status && (
                <SAlert type={alert.type} message={alert.message} />
              )}
            </div>
            <ApproveInput
              form={form}
              isLoading={isLoading}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Approval;
