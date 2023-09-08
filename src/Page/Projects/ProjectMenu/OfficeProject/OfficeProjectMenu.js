import vector from "../../../../assets/aboutUs/Vector.png";
import ProjectList from "../../../../components/ProjectList/ProjectList";
import { officeData } from "../../../../config/officeData";
import React, { useState } from "react";
import Header from "../../../../components/Header/Header";

export default function OfficeProjectMenu() {
  const [office] = useState(officeData);

  return (
    <div className="project">
      <Header
        headerStatus={false}
        headerColor={"black"}
        background={"#E6E1DE"}
      />
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
