import "./ProjectMenu.css";
import vector from "../../../assets/aboutUs/Vector.png";
import ProjectList from "../../../components/ProjectList/ProjectList";
import GalleryList from "../../../components/GalleryList/GalleryList";
import { hotelData } from "../../../config/hotelData";
import { villaData } from "../../../config/villaData";
import { officeData } from "../../../config/officeData";
import React, { useState } from "react";
import Header from "../../../components/Header/Header";

export default function ProjectMenu() {
  const [hotel] = useState(hotelData);
  const [villa] = useState(villaData);
  const [office] = useState(officeData);

  return (
    <div className="project">
      <Header
        headerStatus={false}
        headerColor={"black"}
        background={"#E6E1DE"}
      />
      <div className="menu-header">
        <div className="menu-top">
          <img src={vector} alt="" />
          <div>Khách sạn</div>
        </div>
      </div>
      <ProjectList blogs={hotel} />

      <div className="menu-header">
        <div className="menu-top">
          <img src={vector} alt="" />
          <div>Biệt thự</div>
        </div>
      </div>

      <ProjectList blogs={villa} />

      <div className="menu-header" style={{ width: "40%" }}>
        <div className="menu-top">
          <img src={vector} alt="" />
          <div>Văn Phòng</div>
        </div>
      </div>

      <ProjectList blogs={office} />
    </div>
  );
}
