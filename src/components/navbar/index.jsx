import React from "react";
import "./navbar.css";
import arrowimg from "../../assets/images.PNG";

export default ({ img }) => {
  return (
    <div className="navbarWraoer">
      <div className="navbarUp">
        <div className="navbarUpRight">
          <img src={img} alt="" />
          <a>بازار املاک</a>
        </div>
        <div className="navbarUpLeft">
          <div className="navbarUpLeft1">
            <p>تهران</p>
            <img src={arrowimg} alt="" />
          </div>
          <div className="navbarUpLeft2">
            <p>ورود به حساب کاربری</p>
            <p>|</p>
            <p className="navbarUpLeftTitle">همکاری با مشاور/آژانس املاک</p>
          </div>
        </div>
      </div>
      <div className="navbarDown">

      </div>
    </div>
  );
};
