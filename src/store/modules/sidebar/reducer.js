const isMobile = window.matchMedia("(max-width: 700px)");
const storage = localStorage.getItem("sidebarClose");

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isOpenMenu: action.isOpenMenu,
      };
    default:
      return state;
  }
};
