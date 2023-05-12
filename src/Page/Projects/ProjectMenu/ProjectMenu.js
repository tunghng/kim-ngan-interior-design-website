import "./ProjectMenu.css";
import vector from "../../../assets/aboutUs/Vector.png";
import ProjectList from "../../../components/ProjectList/ProjectList";
import GalleryList from "../../../components/GalleryList/GalleryList";
import { projectData } from "../../../config/projectData";
import { galleryData } from "../../../config/galleryData";
import { useState } from "react";

export default function ProjectMenu() {
  const [project, setProject] = useState(projectData);
  const [gallery, setGallery] = useState(galleryData);

  return (
    <div className="project">
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
