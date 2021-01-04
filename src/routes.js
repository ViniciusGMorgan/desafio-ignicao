import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import { Auth } from "./config/storage";
import Pages from "./routes/pages";

const PrivateRoute = ({ component: Component, setTheme, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem(Auth) != null ? (
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          <Sidebar {...props} />

          <div className="routerContainer">
            <Header />
            <Component {...props} />
          </div>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      {Pages.map((page) => {
        return (
          <PrivateRoute
            exact
            key={page.route}
            path={page.route}
            component={page.Component}
            setTheme={props.setTheme}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;
