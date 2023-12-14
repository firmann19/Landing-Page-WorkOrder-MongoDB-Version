import React, { useEffect } from "react";
import Table from "./partikel/TableWithAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckouts } from "../redux/checkouts/actions";

function TableHistoryWO() {
  const dispatch = useDispatch();
  const checkouts = useSelector((state) => state.checkouts)
  

  useEffect(() => {
    dispatch(fetchCheckouts());
  }, [dispatch]);

  return (
    <div className="latest-workOrder">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Latest Work Order
      </p>
      <div className="main-content main-content-table overflow-auto">
       <Table
         status={checkouts.status}
          thead={[ "Nama", "Departement","Peralatan", "Kode", "Status", "Aksi"]}
          data={checkouts.data}
          tbody={[
            "UserRequest",
            "Departement",
            "NamaBarang",
            "KodeBarang",
            "StatusPengerjaan",
            "Aksi",
          ]}
        Detail={`/history-wo/history-wo-detail`} 
        />
      </div>
    </div>
  );
}

export default TableHistoryWO;
