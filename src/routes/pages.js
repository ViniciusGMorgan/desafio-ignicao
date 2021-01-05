import Clientes from "../pages/clientes/Clientes";
import Home from "../pages/home/Home";

const Pages = [
  {
    name: "home",
    menuName: "Home",
    route: "/",
    component: Home,
    icone: "FiHome",
  },
  {
    name: "clientes",
    menuName: "Clientes",
    route: "/clientes",
    component: Clientes,
    icone: "FiUserPlus",
  },
];

export default Pages;
