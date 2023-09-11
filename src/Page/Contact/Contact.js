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
    location:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3723.3315160563875!2d105.87370657544818!3d21.059417486724517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAzJzMzLjkiTiAxMDXCsDUyJzM0LjYiRQ!5e0!3m2!1sen!2s!4v1694402163062!5m2!1sen!2s",
    workshop: [
      "Xưởng sản xuất 1: Khu làng nghề xã Nam Tiến, Phú Xuyên, Hà Nội",
      "Xưởng sản xuất 2: Ngõ 39, Cầu Mai Lĩnh, Biên Giang, Hà Nội",
    ],
  },
  {
    branch:
      "Chi nhánh Miền Trung: Biệt thự liền kề số 14, Đường 72m, Tp Vinh, Nghệ An",
    location:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3779.2096093008045!2d105.67695140000001!3d18.699431599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQxJzU4LjAiTiAxMDXCsDQwJzM3LjAiRQ!5e0!3m2!1sen!2s!4v1694403529153!5m2!1sen!2s",
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

export default function Contact() {
  const [hanoiOfficeChecked, setHanoiOfficeChecked] = React.useState(
    address[0].location,
  );

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
              <div className="address">
                <div
                  className="branch"
                  style={{ cursor: "pointer" }}
                  onClick={() => setHanoiOfficeChecked(item.location)}
                >
                  {item.branch}
                </div>
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
      <div className="google-map">
        <iframe
          src={hanoiOfficeChecked}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="map"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
