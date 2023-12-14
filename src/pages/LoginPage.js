import React, { useState } from "react";
import Logo from "../assets/images/logoHTA.png";
import LoginInput from "../components/LoginInput";
import ImgLogin from "../assets/images/img-login.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../utils/fetch";
import { userLogin } from "../redux/auth/actions";
import SAlert from "../components/partikel/Alert";

function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData("/auth/login", form);
      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.user,
          res.data.data.namaDepartement,
          res.data.data.departementId,
          res.data.data.userId,
        )
      );

      setIsLoading(false);
      navigate("/dashboard");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: err?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      });
    }
  };

  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <div className="container mx-auto">
            <div className="" style={{ width: "100%", textAlign: "center" }}>
              {alert.status && (
                <SAlert type={alert.type} message={alert.message} />
              )}
            </div>
            <div className="pb-50">
              <a class="navbar-brand" href="../index.html">
                <img src={Logo} width="80" height="80" />
              </a>
            </div>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
            <p className="text-lg color-palette-1 m-0">
              Masuk untuk melakukan proses Work Order
            </p>
            <LoginInput
              form={form}
              isLoading={isLoading}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
        <div
          className="col-xxl-7 col-lg-6 text-center pt-lg-145 pb-lg-227 d-lg-block d-none"
          style={{ backgroundColor: "#1A1640" }}
        >
          <img
            src={ImgLogin}
            alt=""
            width="500px"
            height="500px"
            className="pb-50 img-fluid"
          />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
