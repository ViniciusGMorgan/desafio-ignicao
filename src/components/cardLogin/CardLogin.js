import React from "react";

import "./CardStyle.css";

const CardLogin = ({ children }) => {
  return (
    <div className="cardPage">
      <div className="cardContainer">{children}</div>
    </div>
  );
};

export default CardLogin;
