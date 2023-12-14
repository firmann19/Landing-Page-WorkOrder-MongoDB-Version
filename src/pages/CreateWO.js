import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import CreateWoInput from "../components/CreateWoInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../utils/fetch";
import { fetchListsUserByDepartement } from "../redux/lists/actions";
import { setNotif } from "../redux/notif/actions";
import SAlert from "../components/partikel/Alert";

function CreateWO() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [departementId, setDepartementId] = useState(null);
  const [namaDepartement, setNamaDepartement] = useState(null);
  const lists = useSelector((state) => state.lists);
  const [form, setForm] = useState({
    NamaBarang: "",
    KodeBarang: "",
    Permasalahan: "",
    Date_RequestWO: "",
    UserApprove: 0,
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchListsUserByDepartement());
    const fetchData = () => {
      let { user, departementId, namaDepartement, userId } =
        localStorage.getItem("auth")
          ? JSON.parse(localStorage.getItem("auth"))
          : {};

      setUser(user);
      setDepartementId(departementId);
      setNamaDepartement(namaDepartement);
      setUserId(userId);
    };
    fetchData();
  }, [dispatch]);

  const handleChange = async (e) => {
    if (e.target.name === "UserApprove") {
      setForm({ ...form, [e.target.name]: e });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      NamaBarang: form.NamaBarang,
      KodeBarang: form.KodeBarang,
      Permasalahan: form.Permasalahan,
      Date_RequestWO: form.Date_RequestWO,
      UserApprove: form.UserApprove.value,
      UserRequest: userId,
      Departement: departementId,
    };

    const res = await postData(`/checkout`, payload);
    if (res?.data?.data) {
      dispatch(setNotif(true, "success", `berhasil create Work Order`));
      navigate("/complete-createWO");
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
      <div
        className="workOrder overflow-auto h-screen"
        style={{ height: "100vh" }}
      >
        <Navbar />
        <div className="pt-lg-100 pb-5 mb-3 responsive-form-checkout workOrder mx-auto">
          <div className="m-auto" style={{ width: "50%" }}>
            {alert.status && (
              <SAlert type={alert.type} message={alert.message} />
            )}
          </div>
          <Card style={{ width: "50%" }} className="m-auto">
            <h1 className="fw-bold text-4xl color-palette-1 text-center mt-3">
              Work Order
            </h1>

            <CreateWoInput
              user={user}
              namaDepartement={namaDepartement}
              form={form}
              isLoading={isLoading}
              lists={lists}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CreateWO;
