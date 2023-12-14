/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckouts } from "../redux/checkouts/actions";
import Table from "../components/partikel/TableWithAction";
import { useState } from "react";

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
      <div
        className="workOrder overflow-auto h-screen"
        style={{ height: "100vh" }}
      >
        <div className="p-5">
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <a
                  onClick={() => handleFilterChange("*")}
                  href="#"
                  className={`btn btn-status rounded-pill text-sm ${
                    filterStatus === "*" ? "btn-active" : ""
                  } me-3`}
                >
                  All Order
                </a>
                <a
                  onClick={() => handleFilterChange("Pending")}
                  href="#"
                  className={`btn btn-status rounded-pill text-sm ${
                    filterStatus === "Pending" ? "btn-active" : ""
                  } me-3`}
                >
                  Pending
                </a>
                <a
                  onClick={() => handleFilterChange("OnProgress")}
                  href="#"
                  className={`btn btn-status rounded-pill text-sm ${
                    filterStatus === "OnProgress" ? "btn-active" : ""
                  } me-3`}
                >
                  OnProgress
                </a>
                <a
                  onClick={() => handleFilterChange("Close")}
                  href="#"
                  className={`btn btn-status rounded-pill text-sm ${
                    filterStatus === "Close" ? "btn-active" : ""
                  } me-3`}
                >
                  Close
                </a>
              </div>
            </div>
          </div>
          <div className="latest-workOrder">
            <p className="text-lg fw-medium color-palette-1 mb-14">
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
    </>
  );
}

export default HistoryWO;
