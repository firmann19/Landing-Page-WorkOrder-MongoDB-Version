import React from "react";
import WorkOrder from "../assets/icons/WorkOrderIcon.png";
import History from "../assets/icons/HistoryIcon.png";
import Blog from "../assets/icons/BlogIcon.png";
import Support from "../assets/icons/supportIcon.png";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <div className="featured mx-auto pb-5" style={{ width: "756px" }}>
      <div className="row">
        <div className="col">
          <Link to="/create-wo" className="text-decoration-none">
            <div className="item">
              <img
                src={WorkOrder}
                className="ms-3 my-3"
                alt="WorkOrder"
                width="50"
                height="50"
              />
              <h4 className="title-item ms-3">Create Work Order</h4>
              <p className="desc-item ms-3 text-lg color-palette-1 m-0">
                Membuat pesanan kerja baru dan mengirimkannya pada departemen IT
              </p>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/history-wo" className="text-decoration-none">
            <div className="item">
              <img
                src={History}
                className="ms-3 my-3"
                alt="history"
                width="50"
                height="50"
              />
              <h4 className="title-item ms-3">History Work Order</h4>
              <p className="desc-item ms-3 text-lg color-palette-1 m-0">
                Melihat riwayat pekerjaan yang telah dilakukan pada suatu Work
                Order.
              </p>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/blog" className="text-decoration-none">
            <div className="item">
              <img
                src={Blog}
                className="ms-3 my-3"
                alt="WorkOrder"
                width="50"
                height="50"
              />
              <h4 className="title-item ms-3">Blog</h4>
              <p className="desc-item ms-3 text-lg color-palette-1 m-0">
                Informasi tentang Sistem Work Order untuk menyelesaikan masalah
              </p>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/support" className="text-decoration-none">
            <div className="item">
              <img
                src={Support}
                className="ms-3 my-3"
                alt="WorkOrder"
                width="50"
                height="50"
              />
              <h4 className="title-item ms-3">Support</h4>
              <p className="desc-item ms-3 text-lg color-palette-1 m-0">
                Membantu Anda menyelesaikan masalah Anda dengan cepat dan mudah
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured;
