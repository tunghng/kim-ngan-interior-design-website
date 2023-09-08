import vector from "../../../../assets/aboutUs/Vector.png";
import ProjectList from "../../../../components/ProjectList/ProjectList";
import { hotelData } from "../../../../config/hotelData";
import React, { useState } from "react";
import Header from "../../../../components/Header/Header";

export default function HotelProjectMenu() {
  const [hotel] = useState(hotelData);

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
    </div>
  );
}
