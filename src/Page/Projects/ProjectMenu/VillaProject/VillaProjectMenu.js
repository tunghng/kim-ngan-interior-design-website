import vector from "../../../../assets/aboutUs/Vector.png";
import ProjectList from "../../../../components/ProjectList/ProjectList";
import { villaData } from "../../../../config/villaData";
import React, { useState } from "react";
import Header from "../../../../components/Header/Header";

export default function VillaProjectMenu() {
  const [villa] = useState(villaData);

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
          <div>Biệt thự</div>
        </div>
      </div>
      <ProjectList blogs={villa} />
    </div>
  );
}
