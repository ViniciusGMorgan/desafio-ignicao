import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from "../../config/storage";
import * as FeatherIcons from "react-icons/fi";

import { toggleMenu } from "../../store/modules/sidebar/action";
import { logout } from "../../store/modules/login/action";

import routes from "../../routes/pages";

import "./Sidebar.css";

export default function Sidebar({ location }) {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.Sidebar.isOpenMenu);
  const [unhover, setUnhover] = useState(false);

  const handleToggleMenuItem = async () => {
    await setUnhover(true);
    await dispatch(toggleMenu(false));
    setTimeout(() => setUnhover(false), 1500);
  };

  useEffect(() => {
    handleToggleMenuItem();
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeMenu(isOpen);
      }
    }

    function closeMenu(statusMenu) {
      if (statusMenu) {
        dispatch(toggleMenu(false));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, isOpen]);

  const SideBarLogo = ({ isOpen }) => {
    return (
      <div className="sideBarLogoContainer">
        <div className={`sideBarLogo logoClose ${isOpen && "displayNone"}`} />
        <div className={`sideBarLogo logoOpen ${!isOpen && "displayNone"}`} />
      </div>
    );
  };

  const SideBarItem = (item) => {
    const Icon = FeatherIcons[item.nomeImagem];
    return (
      <Link className="sideBarItem" to={item.url}>
        {item.icone ? <Icon size="20" /> : <FeatherIcons.FiCircle size="18" />}
        <span className={`navbar__brand ${isOpen && "displayBlock"}`}>
          {item.descricao}
        </span>
      </Link>
    );
  };

  const UnhoverBlock = () => {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: 300,
          zIndex: 4,
          backgroundColor: "transparent",
          position: "fixed",
        }}
      />
    );
  };
  return (
    <>
      {unhover && <UnhoverBlock />}
      <div
        ref={wrapperRef}
        className={`sideBarContainer ${isOpen && "show displayBlock"}`}
      >
        <div
          onClick={() => handleToggleMenuItem()}
          style={{ cursor: "pointer" }}
        >
          <SideBarLogo isOpen={isOpen} />
        </div>
        <Link
          className="sideBarItem"
          id="home"
          to="/"
          onClick={() => {
            handleToggleMenuItem();
          }}
        >
          <FeatherIcons.FiHome size="20" />
          <span className={`navbar__brand ${isOpen && "displayBlock"}`}>
            Home
          </span>
        </Link>
        <div className="sideBarScroll">
          {routes.map((item) => (
            <SideBarItem item={item} />
          ))}
        </div>

        {!routes && isOpen && (
          <p className="text-white margin-left">Sem opções disponíveis</p>
        )}

        <Link
          onClick={() => logout()}
          to=""
          id="sair"
          className="sideBarItem out"
        >
          <FeatherIcons.FiLogOut size="20" />
          <span className={`navbar__brand ${isOpen && "displayBlock"}`}>
            Sair
          </span>
        </Link>
      </div>
    </>
  );
}
