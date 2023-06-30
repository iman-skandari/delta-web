import React from "react";
import "./button.css"

export default ({title}) => {
  return (
    <div>
      <button className="btnBox">
        <p>{title} </p>
      </button>
    </div>
  );
};
