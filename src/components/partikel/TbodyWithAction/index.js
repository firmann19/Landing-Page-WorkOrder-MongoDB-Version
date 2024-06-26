import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import moment from "moment";

function TbodyWithAction({
  data,
  display,
  editUrl,
  deleteAction,
  actionNotDisplay,
  customAction,
  confirmationUrl,
  Detail,
  status,
}) {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { userId } = JSON.parse(localStorage.getItem("auth")) || {};
      setUserId(userId);
    };
    fetchData();
  }, []);
  return (
    <tbody>
      {status === "process" ? (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            <div className="flex items-center justify-center">
              <Spinner animation="border" variant="primary" />
            </div>
          </td>
        </tr>
      ) : data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {Object.keys(data).map(
                (key) =>
                  display.indexOf(key) > -1 && (
                    <td key={key}>
                      {key === "Date_RequestWO" || key === "Date_CompletionWO"
                        ? moment(data[key]).format("DD-MM-YYYY, h:mm:ss a")
                        : data[key]}
                    </td>
                  )
              )}
              {!actionNotDisplay && (
                <td>
                  {customAction && (
                    <Button
                      className={"mx-2"}
                      variant="warning"
                      size={"sm"}
                      disabled={
                        data.UserRequest._id === userId ||
                        data.StatusWO === "Ditolak" ||
                        data.StatusWO === "Approve"
                      }
                      action={() => customAction(data._id, data.StatusWO)}
                    >
                      Ditolak
                    </Button>
                  )}
                  {editUrl && (
                    <Button
                      variant="success"
                      size={"sm"}
                      action={() => navigate(`${editUrl}/${data._id}`)}
                    >
                      Approve
                    </Button>
                  )}
                  {confirmationUrl && (
                    <Button
                      variant="secondary"
                      size={"sm"}
                      action={() => navigate(`${confirmationUrl}/${data._id}`)}
                    >
                      Confirmation
                    </Button>
                  )}
                  {Detail && (
                    <Button
                      className={"btn-status rounded-pill text-sm"}
                      action={() => {
                        if (
                          data.StatusPengerjaan !== "Pending" &&
                          data.StatusPengerjaan !== "On Progress"
                        ) {
                          navigate(`${Detail}/${data._id}`);
                        }
                      }}
                      disabled={
                        data.StatusPengerjaan === "Pending" ||
                        data.StatusPengerjaan === "On Progress"
                      }
                    >
                      Detail
                    </Button>
                  )}
                  {deleteAction && (
                    <Button
                      className={"mx-2"}
                      variant="danger"
                      size={"sm"}
                      disabled={data.UserRequest._id === userId}
                      action={() => deleteAction(data._id)}
                    >
                      Hapus
                    </Button>
                  )}
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            Tidak Ditemukan Data
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TbodyWithAction;
