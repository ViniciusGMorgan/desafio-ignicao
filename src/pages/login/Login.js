import React, { useState } from "react";
import { Button, Form, FormGroup, Spinner } from "reactstrap";
import { useHistory } from "react-router-dom";

import LoginForm from "./LoginForm";
import { login } from "./LoginService";
import Card from "../../components/cardLogin/CardLogin";

import "./Login.css";

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    value: "",
    blur: false,
  });
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState({
    value: "",
    blur: false,
  });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setUser({ ...user, blur: true });
    setPassword({ ...password, blur: true });

    if (user.value.length > 0 && password.value.length > 0) {
      login(
        user.value,
        password.value,
        (message) => setError(message),
        () => history.push("/"),
        () => setLoading(false)
      );
    }
  }

  return (
    <div className="loginMain">
      <Card>
        <div className="loginContainer">
          <p>Informe seu usuário e senha para acessar</p>
          <Form onSubmit={handleSubmit}>
            <LoginForm
              user={user}
              setUser={setUser}
              password={password}
              setPassword={setPassword}
            />

            <FormGroup className="loginButtonGroup">
              <Button color="primary" className="loginButton">
                {loading ? <Spinner size="sm" /> : "ENVIAR"}
              </Button>
            </FormGroup>
            <p className="loginError">{error && error}</p>
          </Form>
        </div>
      </Card>
    </div>
  );
}
