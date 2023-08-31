import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import "./ProjectList.css";

const ProjectList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <ProjectItem blog={blog} />
      ))}
    </div>
  );
};

export default ProjectList;
