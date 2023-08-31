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
        <div className="header-text">Về chúng tôi</div>
      </div>

      <div className="header-subtext">
        Bằng nỗ lực kiến tạo không gian chất lượng và trải nghiệm tuyệt vời, nội
        thất Kim Ngân hướng đến mục tiêu trở thành nhà cung cấp các dịch vụ
        thiết kế và thi công hàng đầu trong khu vực.
      </div>

      <div className="image-container">
        <img src={image} alt="" className="image" />
      </div>

      <div className="aboutUs-bottom" style={{ display: "flex" }}>
        <div className="aboutUs-bottom-left">
          <div className="bottom-left-text">NỘI THẤT KIM NGÂN</div>
          <Button
            className="aboutUs-button"
            styles={{}}
            content="Xem thêm"
            handleClick={() => moveTo("/")}
          ></Button>
        </div>
        <div className="aboutUs-bottom-right">
          <div className="bottom-right-text">
            Sự hăng hái đối với những giải pháp sống sáng tạo trở thành một sứ
            mệnh lớn hơn cho chính chúng ta và toàn bộ hành tinh. Khám phá những
            khái niệm mới, nguồn cảm hứng thiết kế sáng tạo và những ý tưởng đầy
            tầm nhìn cho cuộc sống đa năng hiện đại bằng cách duyệt qua bộ sưu
            tập của chúng tôi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
