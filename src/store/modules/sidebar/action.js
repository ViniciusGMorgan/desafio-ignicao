export function toggleMenu(isOpenMenu) {
  console.log(isOpenMenu);
  return {
    type: "TOGGLE_MENU",
    isOpenMenu,
  };
}
