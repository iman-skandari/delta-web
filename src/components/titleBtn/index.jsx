import React from "react";
import coprate from "../../assets/Coprate.svg"
import "./titleBtn.css" 
export default ({title,desc,img}) => {
  return (
    <div>
      <button className="titleBtnWrapper">
        <div className="titleBtnImg">
          <img src={img} alt="" />
        </div>
        <div className="titleBtnDeck">
          <h3>{title}</h3>
          <p>{desc}</p>

        </div>
      </button>
    </div>
  );
};
