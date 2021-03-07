import React from "react";
import iconClose from "../icons/close.svg";

function Alert({ message, handleAlertClose }) {
  return (
    <div className="alert-box">
      <p>{message}</p>
      <button className="close" onClick={() => handleAlertClose(false)}>
        <img src={iconClose} alt="Close" />
      </button>
    </div>
  );
}

export default Alert;
