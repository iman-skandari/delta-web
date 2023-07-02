import React from "react";
import "./footer.css";
import instaimag from "../../assets/insta.JPG";
import linkdinimg from "../../assets/linkdinimg.png";
import telimg from "../../assets/telimg.JPG";
import googleplay from "../../assets/googleplay.PNG"
import download from "../../assets/download.PNG"
import enamad from "../../assets/enamad.PNG"
import logo from "../../assets/logo.WEBP"

export default () => {
  return (
    <div>
      <div className="footerUp">
        <a> درباره ما</a>
        <a>تماس با ما</a>
        <a>طراحی وب سایت ملکی</a>
        <a> فرصت های شغلی</a>
        <a>تبلیغات در دلتا</a>
        <a>دلتا مگ</a>
      </div>

      <div className="footerMidle">
        <div className="footerMidleUp">
          <div className="footerMidleUp1">
            <div>
              <h3>دلتا وبسایت خرید و فروش ملک در ایران</h3>
            </div>
            <div>
              <p>
                وبسایت دلتا سامانه خرید، فروش، رهن و اجاره هر نوع ملک در تهران،
                اصفهان، کیش و سایر شهر های ایران می باشد. خرید یا اجاره آپارتمان
                در کلیه مناطق تهران مانند خرید یا اجاره آپارتمان در جردن، خرید
                یا اجاره آپارتمان در ظفر، خرید یا اجاره آپارتمان در ونک، خرید یا
                اجاره آپارتمان در میرداماد
              </p>
              <a href="">مشاهده بیشتر</a>
            </div>
          </div>
          <div className="footerMidleUp2">
            <div>
              <h3>دلتا در شبکه های اجتماعی</h3>
            </div>
            <div className="socialBox">
             
              <div className="socialBtn">
                <img src={instaimag} alt="" />
                <p>اینستاگرام</p>
              </div>
              <div className="socialBtn">
                <img src={linkdinimg} alt="" />
                <p>لینکدین</p>
              </div>{" "}
              <div className="socialBtn">
                <img src={telimg} alt="" />
                <p>تلگرام</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footerMidleDown">
            <div className="footerMidle1">
              <div>
                <h3>اپلیکیشن ملکی دلتا (دلتاملک)</h3>
                <p>از طریق یکی از روش های زیر اپلیکیشن ملکی دلتا را دریافت و نصب نمائید.</p>
              </div>
              <div>
                <img src={googleplay} alt="" />
               
              </div>
              <div>
              <img src={download} alt="" />
              </div>
              
            </div>
            <div className="footerMidle2">
              <div>
                <h3>ارتباط با سایت ملکی دلتا</h3>
                <p>تلفن پشتیبانی: <a href="">021 - 8686 |09190628686</a></p>
                <p>دفتر مرکزی: ونک، خیابان پنجم گاندی، پلاک 16 ساختمان دلتا</p>
              </div>
              <div>
                <img src={enamad} alt="" />
                <a href="">مجوز ساماندهی</a>
                <img src={logo} alt="" />
              </div>
            </div>

        </div>
      </div>

      <div className="footerDown">
        <h4>سایت دلتا مسئولیتی در قبال صحت و سقم اطلاعات موجود در سایت ندارد. خواهشمند است در صورت مشاهده هرگونه محتوای نادرست و غیر متعارف اینجا را کلیک کنید.
کلیه حقوق مادی و معنوی این وب سایت متعلق به گروه دلتا می باشد و هرگونه استفاده غیر مجاز از محتوا، قالب و ظاهر سایت پیگرد قانونی دارد.</h4>
      </div>
    </div>
  );
};
