import React from "react";
import { Table } from "reactstrap";

import { FiTrash2, FiEdit } from "react-icons/fi";

const ClientesGrid = ({ data, handleEdit, handleRemove }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Tags</th>
          <th className="center">Editar</th>
          <th className="center">Excluir</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.tags}</td>
            <td className="center" style={{ cursor: "pointer" }}>
              <FiEdit onClick={() => handleEdit(item.id)}></FiEdit>
            </td>
            <td className="center" style={{ cursor: "pointer" }}>
              <FiTrash2 onClick={() => handleRemove(item.id)}></FiTrash2>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ClientesGrid;
