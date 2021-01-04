import api from "../../services/api";

import { Auth } from "../../config/storage";

const user = JSON.parse(sessionStorage.getItem(Auth));

export function login(user, password, handleError, handleSuccess) {
  api
    .post("Autenticar", {
      login: user.toString().toUpperCase(),
      senha: password,
      idModulo: 9,
    })
    .then((res) => {
      if (res.data.statusCode >= 400 && res.data.statusCode <= 499) {
        handleError("Verifique o usuário e senha");
      } else {
        sessionStorage.setItem(Auth, JSON.stringify(res.data));
        handleSuccess();
      }
    })
    .catch((err) => {
      console.error(err);
      handleError("Erro ao efetuar o login, por favor tente novamente");
    });
}

export function userHasPermission(menuName) {
  if (user !== null && user.module !== null) {
    const menuList = user.module.menu;

    if (!menuList) return false;

    for (let menuItem of menuList) {
      if (menuItem.nome === menuName || menuName === "home") {
        return true;
      }
    }
  }
}

export function getInfo() {
  if (!user) {
    return {};
  } else {
    return {
      company: user.empresa,
      authToken: `Bearer ${user.accessTokenAutenticacao}`,
      token: `Bearer ${user.accessToken}`,
      user: user.nomeUsuario,
    };
  }
}
