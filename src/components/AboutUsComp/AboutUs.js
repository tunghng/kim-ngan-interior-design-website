import "./AboutUs.css";

import image from "../../assets/aboutUs/section5image.png";
import vector from "../../assets/aboutUs/Vector.png";

import Button from "../Button/Button";

import { moveTo } from "../../utils/HelperFunction";

import React from "react";

const AboutUs = (props) => {
  return (
    <div className="aboutUs-container">
      <div className="header-text-container">
        <img src={vector} alt="" className="vector" />
        <div className="header-text">About Us</div>
      </div>

      <div className="header-subtext">
        Bằng nỗ lực kiến tạo không gian chất lượng và trải nghiệm tuyệt vời, nội
        thất Kim Ngân hướng đến mục tiêu trở thành nhà cung cấp các dịch vụ
        thiết kế và thi công hàng đầu trong khu vực.
      </div>

      <div className="image-container">
        <img src={image} alt="" className="image" />
      </div>

      <div className="aboutUs-bottom">
        <div style={{ display: "flex" }}>
          <div className="aboutUs-bottom-left">
            <div className="bottom-left-text">HOMESTEAD FURNITURE</div>
            <Button
              styles={{
                height: "3rem",
                width: "10rem",
                padding: "0.05rem 1.5rem",
                color: "#ffffff",
              }}
              content="Xem thêm"
              handleClick={() => moveTo("/")}
            ></Button>
          </div>
          <div className="aboutUs-bottom-right">
            <div className="bottom-right-text">
              An enthusiasm for creative living solutions develops into a bigger
              mission for ourselves and the rest of the planet. Discover new
              concepts, creative design inspiration, and forward-thinking ideas
              for contemporary, multipurpose living by browsing our archive.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
