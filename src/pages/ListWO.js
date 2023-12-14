import React from "react";
import Table from "../components/partikel/TableActionSecond";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCheckouts } from "../redux/checkouts/actions";
import Swal from "sweetalert2";
import { deleteData } from "../utils/fetch";
import { setNotif } from "../redux/notif/actions";

function ListWO() {
  const dispatch = useDispatch();
  const checkouts = useSelector((state) => state.checkouts);

  useEffect(() => {
    dispatch(fetchCheckouts());
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
          if(res?.data?.data){
          dispatch(
            setNotif(
              true,
              "success",
              `berhasil hapus Work Order`
            )
          );
          dispatch(fetchCheckouts());
        }
       }
      }
    });
  };

  return (
    <Container className="mt-5">
      <Table
        thead={[
          "Peralatan",
          "Kode",
          "Status",
          "Tanngal Order",
          "Departement",
          "Nama",
          "Aksi",
        ]}
        data={checkouts.data}
        tbody={[
          "userName",
          "departUser",
          "namaBarang",
          "kodeBarang",
          "StatusWO",
          "date_requestWO",
        ]}
        deleteAction={(id) => handleDelete(id)}
       editUrl={`/listwo/approval`}
      />
    </Container>
  );
}

export default ListWO;
