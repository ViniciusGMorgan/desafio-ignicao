export function logout(history) {
  return (dispatch) => {
    sessionStorage.clear();
    history.replace("/login");
    dispatch({
      type: "LOGOUT",
    });
  };
}
