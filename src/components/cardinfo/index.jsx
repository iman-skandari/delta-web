import React from "react";
import "./cardinfo.css";
import starimag from"../../assets/star.PNG"

export default ({desc}) => {
  return (
    <div className="cardInfo">
      <div className="cardInfoR">
        <a href="">{desc}</a>
        <img src={starimag} alt="" />
        
      </div>
      <div className="cardInfoL">
        <button className="cardInfoB">اطلاعات بیشتر</button>
      </div>
    </div>
  );
};
