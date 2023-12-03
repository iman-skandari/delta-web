import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Btn from "../../components/button";
import TitleBtn from "../../components/titleBtn";
import coprate from "../../assets/Coprate.svg";
import realtor from "../../assets/Realtor.svg";
import map from "../../assets/Map.svg";
import Card from "../../components/card";
import cardImg from "../../assets/hhh.webp";
import navbarLogo from "../../assets/logo.svg";
import Cardinfo from "../../components/cardinfo";
import Footer from "../../components/footer";
import axios from "axios";
import "./landing.css";
import imgHome from "../../assets/homeMode2.webp";
import homeImg from '../../assets/dublexHome.jpg'
import homeImg2 from '../../assets/homeMode.jpg'
import homeImg3 from '../../assets/homeLand.jpg'
import { Button, Space, Row, Col, Divider } from "antd";
import { StarFilled } from "@ant-design/icons";

const Landing = () => {
  const [userData, setUserData] = useState([]);
  const [foodData, setFoodData] = useState({});



  // //filter Role user
  // const userRole = data.filter((item) => item.role === "user");

  // //filter user with nobodyHave Role
  // const nobodyHaveRole = data.filter((foad) => foad.role === "nobodyHave");

  // //find user with nobodyHave Role
  // const nobodyHaveRoleFind = data.find((foad) => foad.role === "nobodyHave");

  // //filter user age > 24
  // const agePerson = data.filter((scofield) => scofield.age > 24);
  // console.log({ agePerson });

  // const handleFood = (event , name) =>{
  //  setFoodData(event.target.value)
  // if(name === "food"){
  //   setFoodData(p=>({...p ,FirstFood: event.target.value}))
  // }else{
  //   setFoodData(p=>({...p ,drink: event.target.value}))
  // }

  // setFoodData({FirstFood:event.target.value})
  // }

  // const getDataa = async () => {

  //   let response = await axios.post("https://swapi.dev/api/people/" , foodData);
  //   console.log({response});
  //   setUserData(response.data.results);
  // };

  // useEffect(() => {
  //   getDataa();
  // }, []);

  // const [first, setfirst] = useState(false);
  // const [memberData, setMemberData] = useState([]);
  // console.log({ memberData });

  // const handleMemberChoose = (memeberslUs) => {
  //   const findMember = memberData.find(
  //     (member) => member.userName === memeberslUs.userName
  //   );
  //   console.log({findMember});
  //   if (findMember) {
  //     setMemberData(memberData);
  //   } else {
  //     setMemberData((p) => [...p, memeberslUs]);
  //   }
  // };

  // function ticket() {
  //   setfirst(true);
  // }

  return (
    <div>
      {/* <Navbar img={navbarLogo} /> */}

      <div className="titleNvbarDown">
        <div className="container">
          {/* <Space wrap>
            <Button type="dashed" danger={true} onClick={ticket}loading={first}>Dashed Button</Button> 
          </Space> */}
          <h3>
            خرید ، فروش، رهن و اجاره خانه، آپارتمان، ویلا و مغازه در
            <span className="titleBaceNvbar">تهران</span>{" "}
          </h3>
          <div className="btnBgWrapper">
            <div className="BtnBackground">
              <div className="BtnBackground1">
                <div>
                  <h3>دنبال خرید یا اجاره ملک هستید؟</h3>
                </div>
                <div className="btnBorder">
                  <Btn address="/homeRent" title="اجاره ملک" />
                  <Btn title="خرید ملک" />
                </div>
              </div>

              <div></div>
            </div>
            <div className="BtnBackground">
              <div className="BtnBackground1">
                <div>
                  <h3>دنبال خرید یا اجاره ملک هستید؟</h3>
                </div>
                <div className="btnBorder">
                  <Btn title="اگهی خرید" />
                  <Btn title="اگهی فروش" />
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerBox">
        <div className="titleButtons">
          <TitleBtn
            img={coprate}
            title="عضویت آژانس املاک"
            desc="در سایت دلتا"
          />
          <TitleBtn
            img={realtor}
            title="عضویت مشاور مستقل"
            desc="در سایت دلتا"
          />
          <TitleBtn
            img={map}
            title="آشنایی با محله های تهران"
            desc="برای خرید یا اجاره ملک"
          />
        </div>
        <div className="cardWrapper">
          <Card img={imgHome} deck="فروش آپارتمان 80متری در ظفر" />
          <Card img={homeImg} deck="فروش آپارتمان 360متری در جردن" />
          <Card img={homeImg2} deck="فروش آپارتمان 110متری درامیرآباد" />
          <Card img={homeImg3} deck="فروش آپارتمان 90متری در انقلاب" />
        </div>
        <div className="byeHouseWrapper">
          <div className="byeHouseBox">
            <div className="lineBox">
              <Divider style={{ fontWeight: 800 }}>
                خرید ملک در<span className="lineBoxDesc"> تهران</span>
              </Divider>
            </div>

            <Row className="rowWrapper" justify="space-between">
              <Col className="colBox" xs={12} sm={8}>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در چیتگر</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در ونک</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در شهریار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در امیرآباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در انقلاب</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در یوسف آباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در فریدون کنار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در آریاشهر</p>
                </div>
              </Col>
              <Col className="colBox" xs={12} sm={8}>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در چیتگر</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در ونک</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در شهریار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در امیرآباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در انقلاب</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در یوسف آباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در فریدون کنار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در آریاشهر</p>
                </div>
              </Col>
              <Col className="colBox" xs={12} sm={8}>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در چیتگر</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در ونک</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در شهریار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در امیرآباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در انقلاب</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در یوسف آباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در فریدون کنار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در آریاشهر</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="byeHouseBox">
            <div className="lineBox">
              <Divider style={{ fontWeight: 800 }}>
                خرید ملک در<span className="lineBoxDesc"> تهران</span>
              </Divider>
            </div>

            <Row className="rowWrapper" justify="space-between">
              <Col className="colBox" xs={12} sm={8}>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در چیتگر</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در ونک</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در شهریار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در امیرآباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در انقلاب</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در یوسف آباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در فریدون کنار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در آریاشهر</p>
                </div>
              </Col>
              <Col className="colBox" xs={12} sm={8}>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در چیتگر</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در ونک</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در شهریار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در امیرآباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در انقلاب</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در یوسف آباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در فریدون کنار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در آریاشهر</p>
                </div>
              </Col>
              <Col className="colBox" xs={12} sm={8}>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در چیتگر</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در ونک</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در شهریار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در امیرآباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در انقلاب</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در یوسف آباد</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در فریدون کنار</p>
                </div>
                <div className="byeHome">
                  <StarFilled />
                  <p>خرید آپارتمان در آریاشهر</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* <div>
        {userRole.map((king) => (
          <div>{king.name}</div>
        ))}
      </div> */}
      {/* {nobodyHaveRole[0].name}
      {nobodyHaveRoleFind.name}
      <div>
        {agePerson.map((salary) => (
          <div>
            <p>{salary.salary}</p>
            <button>{salary.role}</button>
          </div>
        ))}
      </div> */}
      {/* <div style={{ display: "flex", gap: "4rem", justifyContent: "center" }}>
        {data.map((user) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <p>{user.role}</p>
            <p>{user.age}</p>
            <p>{user.salary}</p>
            <strong>{user.salary}</strong>
            <button
              onClick={() =>
                handleMemberChoose({
                  salary: user.salary,
                  userName: user.userName,
                })
              }
            >
              {user.name}
            </button>
          </div>
        ))}
      </div> */}
      {/* <button style={{ width: "150px", margin: "5rem 10rem" }}>ثبت</button> */}
     
    </div>
  );
};

export default Landing;
