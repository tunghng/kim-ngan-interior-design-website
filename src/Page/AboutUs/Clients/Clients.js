import React from "react";
import "./Clients.css";
import vector from "../../../assets/aboutUs/Vector.png";
import Header from "../../../components/Header/Header";

export default function Clients() {
  const partnership = [
    { name: "Công ty TNHH Lương thực Miền Trung – Bệnh viện đa khoa Cửa Đông" },
    { name: "Công ty TNHH Cửa Đông Miền Trung – Khách sạn Cửa Đông Luxury" },
    { name: "Công ty CP đầu tư Hà Tĩnh – KS Hải Âu Thiên Cầm" },
    { name: "Công ty CP Như Ngọc – KS Toàn Thắng Stone" },
    { name: "Công ty TNHH Ngọc Long Châu – KS Ngọc Long Châu Hà Tĩnh" },
    {
      name: "Ngân hàng thương mại cổ phần Ngoại thương Việt Nam – chi nhánh Vinh, Chi nhánh Nghệ An",
    },
    { name: "Công ty CP Sài Gòn Kim Liên – KS Sài Gòn Kim Liên" },
    { name: "Công ty cổ phần Thiên Minh Đức" },
    { name: "Công ty TNHH TM Tuấn Hoài – Trường Mầm non Happy kid Vinh Tân" },
    {
      name: "Công ty CP xây dựng Trung Đức – Chung cư Trung Đức Lê Lợi, Tp Vinh",
    },
  ];

  const clients = [
    {
      name: "Công ty CPTM Aica HPL",
      image: require("../../../assets/HomePage/aicaHPL.png"),
      position: 0,
    },
    {
      name: "Công ty CP gỗ An Cường",
      image: require("../../../assets/HomePage/anCuong.png"),
      position: 0,
    },
    {
      name: "Công ty TNHH Navado Việt Nam",
      image: require("../../../assets/HomePage/navado.png"),
      position: 1,
    },
    {
      name: "Công ty Excellence Mar",
      image: require("../../../assets/HomePage/quamar.png"),
      position: 1,
    },
  ];
  return (
    <div className="clients-container">
      <Header
        headerStatus={false}
        headerColor={"black"}
        background={"#E6E1DE"}
      />
      <div className="top">
        <div className="homepage-header-container">
          <div
            className="header-text-container products-header"
            style={{ width: "100%" }}
          >
            <img src={vector} alt="" className="vector" />
            <div className="header-text">Đối tác chiến lược</div>
          </div>
        </div>
        <div className="section4-content clients-content">
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
      <div className="bottom">
        <div className="homepage-header-container">
          <div
            className="header-text-container products-header"
            style={{ width: "100%" }}
          >
            <img src={vector} alt="" className="vector" />
            <div className="header-text">Khách hàng</div>
          </div>
        </div>
        <div className="clients-content">
          <div className="partnership">
            {partnership.map((item, key) => {
              return <h3>{item.name}</h3>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
