import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

const ClientesForm = (record, handleSubmit) => {
  return (
    <Form>
      <FormGroup>
        <Row>
          <Col>
            <Label>Nome do cliente</Label>
            <Input
              type="text"
              name="cliente"
              placeholder="Digite o nome do cliente"
              value={record.cliente}
            ></Input>
          </Col>
          <Col>
            <Label>Email</Label>
            <Input
              type="text"
              name="cliente"
              placeholder="Digite o nome do cliente"
              value={record.cliente}
            ></Input>
          </Col>

          <Col>
            <Label>Tags</Label>
            <Input
              type="text"
              name="cliente"
              placeholder="Digite o nome do cliente"
              value={record.cliente}
            ></Input>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="right">
        <Button
          type="button"
          color=" primary margin-right"
          className="primary-color"
          onClick={() => handleSubmit()}
        >
          Cadastrar
        </Button>
      </FormGroup>
    </Form>
  );
};

export default ClientesForm;
