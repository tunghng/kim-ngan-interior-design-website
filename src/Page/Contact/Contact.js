import "./Contact.css";
import vector from "../../assets/aboutUs/Vector.png";
import React from "react";
import atOutline from "../../assets/icon/at-outline.svg";
import mail from "../../assets/icon/mail.svg";
import call from "../../assets/icon/call.svg";
import location from "../../assets/icon/location.svg";

import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";
import Header from "../../components/Header/Header";

export default function Contact() {
  const input = [
    {
      question: "Tên của bạn",
    },
    {
      question: "Số điện thoại",
    },
    {
      question: "Email",
    },
  ];

  const address = [
    {
      branch:
        "Trụ sở chính: Town 3.4 Khai Sơn Town, Khai Sơn City, Thượng Thanh, Long Biên, Hà Nội",
      workshop: [
        "Xưởng sản xuất 1: Khu làng nghề xã Nam Tiến, Phú Xuyên, Hà Nội",
        "Xưởng sản xuất 2: Ngõ 39, Cầu Mai Lĩnh, Biên Giang, Hà Nội",
      ],
    },
    {
      branch:
        "Chi nhánh Miền Trung: Biệt thự liền kề số 14, Đường 72m, Tp Vinh, Nghệ An",
      workshop: [
        "Xưởng sản xuất: Số 68, Đường Lệ Ninh, Khối 8, Quán Bàu, TP Vinh, Nghệ An",
      ],
    },
  ];

  const dropdown = [
    {
      question: "Loại dự án",
      options: ["Hotel", "School", "House"],
    },
  ];
  return (
    <div className="contact-container">
      <Header
        headerStatus={false}
        headerColor={"black"}
        background={"#E6E1DE"}
      />
      <div className="homepage-header-container">
        <div
          className="header-text-container products-header"
          style={{ width: "100%" }}
        >
          <img src={vector} alt="" className="vector" />
          <div className="header-text">Liên hệ</div>
        </div>
        <div
          className="subHeader-text"
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontWeight: "400",
          }}
        >
          Để lại lời nhắn và chúng tôi sẽ liên hệ với bạn trong thời gian sớm
          nhất. Hoặc liên hệ qua thông tin bên dưới.
        </div>
      </div>
      <div className="contact-content" style={{ marginBottom: "52px" }}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="box">
              <img src={location} alt="" />
            </div>
            <p style={{ textAlign: "left", fontWeight: "500" }}>
              Công ty TNHH MTV Kim Ngân Plaza
            </p>
          </div>
          <div>
            {address.map((item, index) => (
              <div>
                <div>{item.branch}</div>
                <ul>
                  {item.workshop.map((workshop) => (
                    <li style={{ cursor: "text" }}>{workshop}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-content">
        <div className="left">
          <div className="up">
            <div>
              <div className="box">
                <img src={atOutline} alt="" />
              </div>
              <p>noithatkimngan.com</p>
            </div>
            <div>
              <div className="box">
                <img src={call} alt="" />
              </div>
              <p>0963 565 189</p>
            </div>
          </div>
          <div className="down">
            <div>
              <div className="box">
                <img src={mail} alt="" />
              </div>
              <p>kimnganfurniture@noithatkimngan.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          {input.map((item, index) => (
            <FormGroup className="form-group">
              <Form.Control placeholder={item.question} />
            </FormGroup>
          ))}
          {dropdown.map((item, index) => (
            <FormGroup className="form-group">
              <select name="">
                <option value="" disabled selected>
                  Loại dự án
                </option>
                {item.options.map((option) => (
                  <option>{option}</option>
                ))}
              </select>
            </FormGroup>
          ))}
          <button>Gửi đi</button>
        </div>
      </div>
    </div>
  );
}
