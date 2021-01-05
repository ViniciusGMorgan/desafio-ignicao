import React, { useState } from "react";
import { toast } from "react-toastify";

import "../Page.css";
import ClientesForm from "./ClientesForm";
import ClientesGrid from "./ClientesGrid";

const Clientes = () => {
  const initialRecord = {
    cliente: null,
    email: null,
    tags: null,
  };
  const { record, setRecord } = useState({});

  const handleSubmit = () => {};

  return (
    <div className="pageContainer">
      <div className="pageFlex">
        <div className="pageContent withoutSearch">
          <h4>Clientes</h4>
          <ClientesForm
            record={record}
            handleSubmit={handleSubmit}
          ></ClientesForm>
        </div>
      </div>
      <div className="pageFlex">
        <div className="pageContent withoutSearch">
          <h4>Listagem de Clientes</h4>
          {/* <ClientesGrid /> */}
        </div>
      </div>
    </div>
  );
};

export default Clientes;
