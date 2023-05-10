import "./ProjectMenu.css";
import vector from "../../../assets/aboutUs/Vector.png";
import ProjectList from "../../../components/ProjectList/ProjectList";
import  { projectData } from "../../../config/projectData"
import { useState } from "react";

export default function ProjectMenu() {
  const [project, setProject] = useState(projectData);
  
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
    </div>
  );
}
