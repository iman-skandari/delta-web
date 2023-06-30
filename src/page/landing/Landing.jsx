import React from "react";
import Navbar from "../../components/navbar";
import Button from "../../components/button";
import TitleBtn from "../../components/titleBtn";
import coprate from "../../assets/Coprate.svg";
import realtor from "../../assets/Realtor.svg";
import Map from "../../assets/Map.svg";
import Card from "../../components/card";
import cardImg from "../../assets/hhh.webp"

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button title="خرید ملک" />
        <Button title="اجاره ملک" />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <TitleBtn
          title="عضویت در آژانس املاک"
          desc="در سایت دیلا"
          img={coprate}
        />
        <TitleBtn title="عضو مشاور مستقل" desc="در سایت دیلا" img={realtor} />
        <TitleBtn
          title="آشنایی با محله های"
          desc="برای خرید یا اجاره"
          img={Map}
        />
      </div>
      <Card  img={cardImg} deck="فروش آپارتمان موقعیت اداری در گاندی"/>

    </div>
  );
};

export default Landing;
