import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import "../Page.css";
import { get, getById, postOrPut, destroy } from "./ClienteService";
import ClientesForm from "./ClientesForm";
import ClientesGrid from "./ClientesGrid";

export default function Clientes() {
  const initialRecord = {
    id: 0,
    name: "",
    email: "",
    tags: "",
  };

  const [record, setRecord] = useState(initialRecord);
  const [data, setData] = useState([]);

  useEffect(() => {
    getClient();
  }, []);

  function getClient() {
    get()
      .then((res) => {
        setData(res);
      })
      .catch((error) =>
        toast.error("Algo de errado aconteceu!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        })
      );
  }

  function handleEdit(id) {
    getById(id)
      .then((res) => setRecord(res))
      .catch((error) =>
        toast.error("Algo de errado aconteceu!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        })
      );
  }

  function handleRemove(id) {
    destroy(id)
      .then((res) => {
        getClient();

        toast.error("Cliente excluído com sucesso!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        });
      })
      .catch((error) =>
        toast.error("Não foi possível excluir!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        })
      );
  }

  const handleSubmit = () => {
    let method = record.id ? "put" : "post";
    postOrPut(record, method)
      .then((res) => {
        getClient();
        toast.success(
          `Cliente ${record.id ? "editado" : "cadastrado"} com sucesso!`,
          {
            position: "bottom-center",
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: "company-error",
          }
        );
        setRecord(initialRecord);
      })
      .catch((error) =>
        toast.error("Algo de errado aconteceu!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        })
      );
  };
  return (
    <div className="pageContainer">
      <div className="pageFlex">
        <div className="pageContent withoutSearch">
          <h4>Clientes</h4>
          <ClientesForm
            record={record}
            setRecord={setRecord}
            initialRecord={initialRecord}
            handleSubmit={handleSubmit}
          ></ClientesForm>
        </div>
      </div>
      {!record.id && (
        <div className="pageFlex">
          <div className="pageContent withoutSearch">
            <h4>Listagem de Clientes</h4>
            <ClientesGrid
              data={data}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
            />
          </div>
        </div>
      )}
    </div>
  );
}
