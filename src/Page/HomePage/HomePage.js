import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./HomePage.css";

// import required modules

import AboutUs from "../../components/AboutUsComp/AboutUs";
import Products from "../../components/Products/Products";

import "./HomePage.css";
import Button from "../../components/Button/Button";
import { moveTo } from "../../utils/HelperFunction";
import vector from "../../assets/aboutUs/Vector.png";

import section2_img from "../../assets/HomePage/section2_img.jpg";
import Header from "../../components/Header/Header";

export default function HomePage() {
  const [header, setHeader] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 735) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const clients = [
    {name: "Công ty CPTM Aica HPL", image: require("../../assets/HomePage/aicaHPL.png"), position: 0},
    {name: "Công ty CP gỗ An Cường", image: require("../../assets/HomePage/anCuong.png"), position: 0},
    {name: "Công ty TNHH Navado Việt Nam", image: require("../../assets/HomePage/navado.png"), position: 1},
    {name: "Công ty Excellence Mar", image: require("../../assets/HomePage/quamar.png"), position: 1},
  ]

  return (
    <div className="w-100">
      <Header headerStatus={header} />
      {/*banner*/}
      <div id="banner" style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            width: "50%",
            fontSize: "300%",
            fontWeight: "700",
          }}
        >
          NỘI THẤT KIM NGÂN
        </div>
        <div
          style={{
            width: "70%",
            fontSize: "250%",
            fontWeight: "700",
            paddingTop: "2rem",
          }}
        >
          "THIẾT KẾ KHÔNG GIAN - NÂNG TẦM GIÁ TRỊ "
        </div>
      </div>

      {/*Section 2*/}
      <div className="section-2">
        <div className="left">
          <div className="title">
            nhà sáng lập{" "}
            <span>
              NỘI THẤT KIM NGÂN
            </span>
          </div>
          <div className="text">
            <p>
              Thân gửi quý khách hàng,
              <br />
              <br /> Từ những ngày đầu thành lập, nội thất Kim Ngân luôn hoạt
              động với phương châm sự hài lòng của khách hàng là mục tiêu xuyên
              suốt của chúng tôi. Sau gần 20 năm không ngừng phát triển, công ty
              đã thực hiện rất nhiều dự án thiết kế, sản xuất và thi công nội
              thất cao cấp cho khách sạn, biệt thự, khu nghỉ dưỡng. Đến với
              chúng tôi, khách hàng sẽ có được công trình tiện nghi, sang trọng,
              mang dấu ấn cá nhân với sản phẩm chất lượng cao và dịch vụ tốt
              nhất.
            </p>
          </div>
        </div>
        <div className="right">
          <img src={section2_img} alt="" style={{width:"80%"}}/>
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#D59E19",
              borderRadius: "20px",
              marginTop: "50px",
            }}
          />
          <h3 style={{ color: "#D59E19", fontSize: "24px" }}>
            Lê Thị Kim Ngân
          </h3>
          <h4 style={{ color: "#3D290D", fontWeight: "500", fontSize: "18px" }}>
            CEO NỘI THẤT KIM NGÂN
          </h4>
          <p style={{ color: "#64543D" }}>
            {/* Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris. */}
          </p>
        </div>
      </div>

      {/*Section3*/}
      <div className="section-3">
        <div>
          <h1>180+</h1>
          <h2>Khách hàng</h2>
        </div>
        <div>
          <h1>10+</h1>
          <h2>Năm kinh nghiệm</h2>
        </div>
        <div>
          <h1>5+</h1>
          <h2>Văn phòng trên thế giới</h2>
        </div>
      </div>

      <Products></Products>

      {/*section4*/}

      <div
        className="section-4"
        style={{ paddingTop: "97px", backgroundColor: "#E6E1DE" }}
      >
        <div className="homepage-header-container">
          <div className="header-text-container products-header">
            <img src={vector} alt="" className="vector" />
            <div className="header-text">Đối tác cung cấp</div>
          </div>
          <div
            className="header-subtext"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "400",
            }}
          >
            Nội thất Kim Ngân tự hào là đơn vị hàng đầu trong lĩnh vực sản xuất
            nội thất gỗ tự nhiên và gỗ công nghiệp với hai nhà xưởng quy mô lớn
            được trang bị máy móc hiện đại, vận hành bởi đội ngũ chuyên môn cao,
            dày dặn kinh nghiệm.
          </div>
        </div>
        <div className="section4-content">
          <div className="clients-top-wrapper">
            {clients.map((item, key) => {
              if (item.position === 0) {
                return (
                  <div className="clients-top">
                    <img src={item.image} alt="" />
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="clients-bottom-wrapper">
            {clients.map((item, key) => {
              if (item.position === 1) {
                return (
                  <div className="clients-bottom">
                    <img src={item.image} alt="" />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/*Section5*/}
      <div
        className="section-5"
        style={{
          paddingTop: "97px",
          backgroundColor: "#E6E1DE",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="homepage-header-container">
            <div className="header-text-container products-header">
              <img src={vector} alt="" className="vector" />
              <div className="header-text">Nhà xưởng</div>
            </div>
            <div
              className="header-subtext"
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontWeight: "400",

              }}
            >
              Nội thất Kim Ngân tự hào là đơn vị hàng đầu trong lĩnh vực sản
              xuất nội thất gỗ tự nhiên và gỗ công nghiệp với hai nhà xưởng quy
              mô lớn được trang bị máy móc hiện đại, vận hành bởi đội ngũ chuyên
              môn cao, dày dặn kinh nghiệm. 
            </div>
          </div>
        </div>
        <div
          className="section5-content"
        >
          <div
            className="left-row"
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="text">Gỗ tự nhiên</div>
              <Button
                styles={{
                  height: "3rem",
                  width: "8rem",
                  "margin-right": "0",
                  "margin-bottom": "0",
                  padding: "0.05rem 1.5rem",
                  color: "#ffffff",
                }}
                content="Khám phá"
                handleClick={() => moveTo("/products")}
              />
            </div>
          </div>
          <div
            className="right-row"
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="text">Gỗ công nghiệp</div>
              <Button
                styles={{
                  height: "3rem",
                  width: "8rem",
                  "margin-right": "0",
                  "margin-bottom": "0",
                  padding: "0.05rem 1.5rem",
                  color: "#ffffff",
                }}
                content="Khám phá"
                handleClick={() => moveTo("/")}
              />
            </div>
          </div>
        </div>
      </div>

      <AboutUs></AboutUs>
    </div>
  );
}
