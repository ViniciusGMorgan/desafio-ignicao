import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import Store from "./store/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className={`appContainer`}>
        <ToastContainer />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
