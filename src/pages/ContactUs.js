import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import ContactUsInput from "../components/ContactUsInput";

const Chat = () => {
  return (
    <>
      <div
        className="workOrder overflow-auto h-screen"
        style={{ height: "100vh" }}
      >
        <Navbar />
        <div className="pt-lg-100 pb-5 mb-3 responsive-form-checkout workOrder mx-auto">
          {/* <div className="m-auto" style={{ width: "50%" }}>
            {alert.status && (
              <SAlert type={alert.type} message={alert.message} />
            )}
            </div> */}
          <div
            style={{ width: "50%", backgroundColor: "#ffff" }}
            className="row mx-auto"
          >
            <div
              className="col-xxl-7 col-lg-6 text-center pt-lg-145 pb-lg-227 d-lg-block d-none"
              style={{ backgroundColor: "#1A1640" }}
            >
              {/* <img
            src={ImgLogin}
            alt=""
            width="500px"
            height="500px"
            className="pb-50 img-fluid"
          /> */}
            </div>
            <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
              <div className="container mx-auto">
                <div className="pb-50">
                  {/* <a class="navbar-brand" href="../index.html">
                <img src={Logo} width="80" height="80" />
              </a> */}
                </div>
                <h2 className="text-4xl fw-bold color-palette-1 mb-10 text-center">
                  Contact Us
                </h2>
                <p className="text-lg color-palette-1 text-center">
                  Kami di sini untuk membantu! Kirim pertanyaan Anda melalui
                  formulir di bawah ini untuk setiap masalah yang Anda temui
                </p>
                <ContactUsInput />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Chat;
