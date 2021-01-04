import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, NavbarText } from "reactstrap";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { toggleMenu } from "../../store/modules/sidebar/action";
import { logout } from "../../store/modules/login/action";

import { Auth } from "../../config/storage";
import "./Header.css";

export default function Header(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.Sidebar.isOpenMenu);
  const { nomeUsuario: user } = JSON.parse(sessionStorage.getItem(Auth));
  const letterUser = user.charAt(0).toUpperCase();

  function handleToggleMenu() {
    dispatch(toggleMenu(!isOpen));
  }

  return (
    <div className="headerContainer">
      <Button
        type="button"
        title="Menu"
        className="headerGoOut"
        onClick={handleToggleMenu}
      >
        <FiMenu color="#000000" />
      </Button>

      <div style={{ display: "flex" }}>
        <div className="hero center" title={`Usuário ${user}`}>
          <b>{letterUser}</b>
        </div>

        <Button
          type="button"
          title="Sair"
          className="headerGoOut"
          onClick={() => dispatch(logout(history))}
        >
          <FiLogOut color="#000000" />
        </Button>
      </div>
    </div>
  );
}
