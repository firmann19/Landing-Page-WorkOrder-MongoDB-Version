import React from "react";
import Table from "../components/partikel/TableActionSecond";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchListCheckouts } from "../redux/checkouts/actions";
import Swal from "sweetalert2";
import { deleteData } from "../utils/fetch";
import { setNotif } from "../redux/notif/actions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ListWO() {
  const dispatch = useDispatch();
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

  return (
    <div className="list-wo">
      <Navbar />
      <Container className="mt-5" style={{ height: "75vh", overflowX: "auto" }}>
        <Table
          thead={[
            "Nama",
            "Departement",
            "Peralatan",
            "Kode",
            "Status",
            "Tanngal Order",
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
          deleteAction={(id) => handleDelete(id)}
          editUrl={`/list-wo/approval`}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default ListWO;
