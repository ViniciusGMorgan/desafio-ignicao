import Clientes from "../pages/clientes/Clientes";
import Home from "../pages/home/Home";

const Pages = [
  {
    name: "home",
    menuName: "Home",
    route: "/",
    component: Home,
    icone: "home",
  },
  {
    name: "clientes",
    menuName: "Clientes",
    route: "/clientes",
    component: Clientes,
    icone: "",
  },
];

export default Pages;
