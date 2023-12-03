import React from "react";
import "./navbar.css";
import arrowimg from "../../assets/images.PNG";
import { Link, useLocation } from "react-router-dom";

export default ({ img }) => {
 

  return (
    <div className="navbarWrapper">
      <div className="navbarUp">
        <div className="navbarUpRight">
          <img src={img} alt="" />
          <a href="/">بازار آنلاین املاک</a>
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
        <a href="">
          صفحه اصلی
          {location.pathname === "/" && <div className="activeLine"></div>}
        </a>
        <Link to="/homeRent">جستجو املاک</Link>
        <a href="">جستجو روی نقشه</a>
        <a href="">ثبت ملک</a>
        <a href="">تقاضای ملک</a>
        <a href="">فرصت های شغلی</a>
      </div>
    </div>
  );
};
