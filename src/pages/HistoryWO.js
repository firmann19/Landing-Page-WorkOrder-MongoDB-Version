import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckouts } from "../redux/checkouts/actions";
import Table from "../components/partikel/TableWithAction";
import { useState } from "react";
import Footer from "../components/Footer";

function HistoryWO() {
  const dispatch = useDispatch();
  const checkouts = useSelector((state) => state.checkouts);

  const [filterStatus, setFilterStatus] = useState("*");

  useEffect(() => {
    dispatch(fetchCheckouts());
  }, [dispatch]);

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const filteredData =
    filterStatus === "*"
      ? checkouts.data
      : checkouts.data.filter((item) => item.Status === filterStatus);

  return (
    <>
      <Navbar />
      <div className="workOrder overflow-auto" style={{ minHeight: "100vh" }}>
        <div className="container pt-5">
          <div className="row mt-4 mb-4">
            <div className="col-12">
              <div
                className="d-flex"
                id="list_status_title"
              >
                <button
                  onClick={() => handleFilterChange("*")}
                  className={`btn btn-status rounded-pill text-sm me-3 ${
                    filterStatus === "*" ? "btn-active" : ""
                  }`}
                >
                  All Order
                </button>
                <button
                  onClick={() => handleFilterChange("Pending")}
                  className={`btn btn-status rounded-pill text-sm me-3 ${
                    filterStatus === "Pending" ? "btn-active" : ""
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => handleFilterChange("OnProgress")}
                  className={`btn btn-status rounded-pill text-sm me-3 ${
                    filterStatus === "OnProgress" ? "btn-active" : ""
                  }`}
                >
                  OnProgress
                </button>
                <button
                  onClick={() => handleFilterChange("Close")}
                  className={`btn btn-status rounded-pill text-sm me-3 ${
                    filterStatus === "Close" ? "btn-active" : ""
                  }`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          <div className="latest-workOrder">
            <p className="label-HistoryWO color-palette-1 mb-4">
              Latest Work Order
            </p>
            <div className="main-content main-content-table overflow-auto">
              <Table
                status={checkouts.status}
                thead={[
                  "Nama",
                  "Departement",
                  "Peralatan",
                  "Kode",
                  "Status",
                  "Aksi",
                ]}
                data={filteredData}
                tbody={[
                  "UserRequestName",
                  "DepartementName",
                  "NamaPeralatan",
                  "KodePeralatan",
                  "Status",
                  "Aksi",
                ]}
                Detail={`/history-wo/history-wo-detail`}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HistoryWO;
