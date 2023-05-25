import "./ProjectMenu.css";
import vector from "../../../assets/aboutUs/Vector.png";
import ProjectList from "../../../components/ProjectList/ProjectList";
import GalleryList from "../../../components/GalleryList/GalleryList";
import { projectData } from "../../../config/projectData";
import { galleryData } from "../../../config/galleryData";
import React, { useState } from "react";
import Header from "../../../components/Header/Header";

export default function ProjectMenu() {
  const [project] = useState(projectData);
  const [gallery] = useState(galleryData);

  return (
    <div className="project">
        <Header headerStatus={false} headerColor={"black"} background={"#E6E1DE"}/>
      <div className="menu-header">
        <div className="menu-top">
          <img src={vector} alt="" />
          <div>Sản phẩm gỗ thật</div>
        </div>

        <div className="menu-bot">
          Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm
          từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
        </div>
      </div>

      <ProjectList blogs={project} />

      <div className="menu-header" style={{ width: "40%" }}>
        <div className="menu-top">
          <img src={vector} alt="" />
          <div>Phong Cách</div>
        </div>
      </div>

      <GalleryList blogs={gallery} />
    </div>
  );
}
