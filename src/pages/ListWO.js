import React from "react";
import Table from "../components/partikel/TableActionSecond";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchListCheckouts } from "../redux/checkouts/actions";
import Swal from "sweetalert2";
import { deleteData, putData } from "../utils/fetch";
import { setNotif } from "../redux/notif/actions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SAlert from "../components/partikel/Alert";

function ListWO() {
  const dispatch = useDispatch();
  const notif = useSelector((state) => state.notif);
  const checkouts = useSelector((state) => state.checkouts);

  useEffect(() => {
    dispatch(fetchListCheckouts());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (result.isConfirmed) {
          const res = await deleteData(`/checkout/${id}`);
          if (res?.data?.data) {
            dispatch(setNotif(true, "success", `berhasil hapus Work Order`));
            dispatch(fetchListCheckouts());
          }
        }
      }
    });
  };

  const handleChangeStatus = (id, status) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Ubah Status",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const payload = {
          StatusWO: status === "Ditolak" ? "Belum Approve" : "Ditolak",
        };
        const res = await putData(`/checkout/${id}/statusrejected`, payload);
        if (res?.data?.data) {
          dispatch(setNotif(true, "success", `berhasil ubah status WorkOrder`));
          dispatch(fetchListCheckouts());
        }
      }
    });
  };

  return (
    <div className="list-wo">
      <Navbar />
      <Container className="mt-5" style={{ height: "75vh", overflowX: "auto" }}>
        <div className="alert-listWO">
          {notif.status && (
            <SAlert
              type={notif.typeNotif}
              message={notif.message}
              className={"alert-listWO-Approve"}
            />
          )}
        </div>
        <Table
          thead={[
            "Nama",
            "Departement",
            "Peralatan",
            "Kode",
            "Status",
            "Tanggal Order",
            "Aksi",
          ]}
          data={checkouts.data}
          tbody={[
            "UserRequestName",
            "DepartementName",
            "NamaPeralatan",
            "KodePeralatan",
            "Status",
            "DateRequestWO",
          ]}
          editUrl={`/list-wo/approval`}
          customAction={(id, statusWO = "") => handleChangeStatus(id, statusWO)}
          deleteAction={(id) => handleDelete(id)}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default ListWO;
