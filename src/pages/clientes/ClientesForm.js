import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

const ClientesForm = ({ record, setRecord, initialRecord, handleSubmit }) => {
  const handleChange = (e) => {
    let name = e.target.name ? e.target.name : "";
    let value = e.target.value ? e.target.value : "";

    setRecord({ ...record, [name]: value });
  };
  return (
    <Form>
      <FormGroup>
        <Row>
          <Col>
            <Label>Nome do cliente</Label>
            <Input
              type="text"
              name="name"
              placeholder="Digite o nome do cliente"
              onChange={(e) => handleChange(e)}
              value={record.name}
            ></Input>
          </Col>
          <Col>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="Digite o email do cliente"
              onChange={(e) => handleChange(e)}
              value={record.email}
            ></Input>
          </Col>

          <Col>
            <Label>Tags</Label>
            <Input
              type="text"
              name="tags"
              placeholder="Digite as tags do cliente"
              onChange={(e) => handleChange(e)}
              value={record.tags}
            ></Input>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup style={{ display: "flex", justifyContent: "flex-end" }}>
        {record.id ? (
          <Button
            type="button"
            color="danger"
            style={{ marginRight: 15 }}
            onClick={() => setRecord(initialRecord)}
          >
            Cancelar
          </Button>
        ) : null}
        <Button type="button" onClick={() => handleSubmit()}>
          Confirmar
        </Button>
      </FormGroup>
    </Form>
  );
};

export default ClientesForm;
