import React from "react";

import "./Header.css";

import { moveTo } from "../../utils/HelperFunction";

import brand_logo from "../../assets/navbar/brand_logo.png";

const Header = ({ headerStatus, headerColor, background }) => {
  return (
    <div
      className={headerStatus ? "header-container-active" : "header-container"}
      style={{
        color: `${headerColor}`,
        borderBottom: `1px solid ${headerColor}`,
        background: `${background}`,
      }}
    >
      <div className="header-logo">
        <div className="left" onClick={() => moveTo("/")}>
          <div className="wrapper">
            <img
              src={brand_logo}
              style={{
                width: "3rem",
              }}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="header-content">
        <div className="header-button">MENU</div>
        <ul className="header-pages">
          <li className="top" onClick={() => moveTo("/")}>
            Trang chủ
          </li>
          <li onClick={() => moveTo("/products")}>Nhà xưởng</li>
          <li className="projects-button pop-up-button">
            <div className="projects-title">Dự án</div>
            <ul className="projects-pop-up pop-up-content">
              <li className="up" onClick={() => moveTo("/projects/hotel")}>
                Dự án khách sạn, nhà hàng
              </li>
              <li className="down" onClick={() => moveTo("/projects/villa")}>
                Dự án biệt thự, nhà phố
              </li>
              <li className="down" onClick={() => moveTo("/projects/office")}>
                Dự án văn phòng
              </li>
              <li className="down" onClick={() => moveTo("/projects")}>
                Dự án showroom, cửa hàng
              </li>
            </ul>
          </li>
          <li className="aboutUs-button pop-up-button">
            <div className="aboutUs-title">Về chúng tôi</div>
            <ul className="aboutUs-pop-up pop-up-content">
              <li className="up" onClick={() => moveTo("/aboutus/hr")}>
                Nhân sự
              </li>
              <li className="down" onClick={() => moveTo("/aboutus/clients")}>
                Khách hàng
              </li>
            </ul>
          </li>
          <li className="bottom" onClick={() => moveTo("/contact")}>
            Liên hệ
          </li>
        </ul>
      </div>

      <div className="blank">blank</div>
    </div>
  );
};

export default Header;
