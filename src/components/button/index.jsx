import React from "react";
import "./button.css"
import { Link } from "react-router-dom";

export default ({title , address}) => {
  return (
    <Link to={address}>
      <button className="btnBox">
        <p>{title} </p>
      </button>
    </Link>
  );
};
