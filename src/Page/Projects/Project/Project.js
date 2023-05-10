import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { projectData } from "../../../config/projectData";
import { projectImage } from "../../../config/projectImage";
import logo from "../../../assets/project/logo.png";

import "./Project.css";
import { Link } from "react-router-dom";
import vector from "../../../assets/aboutUs/Vector.png";

import { Gallery } from "react-grid-gallery";


const Project = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(<div>hello</div>);

  useEffect(() => {
    let blog = projectData.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div>
      <div className="project-item" style={{ background: "#E6E1DE" }}>
        <div className="project-goBack">
          <span>
            <Link to="/projects">Projects</Link>
          </span>
          <span>{`>`}</span> <span>{blog.title}</span>
        </div>

        <div className="project-top">
          <img src={vector} alt="" />
          <div>{blog.title}</div>
        </div>

        <div className="project-body">
          <div
            className="project-body1"
            style={{ display: "flex", paddingTop: "3rem", gap: "6rem" }}
          >
            <div className="project-body1-left" style={{ width: "70%" }}>
              <div
                className=""
                style={{
                  fontWeight: "700",
                  fontSize: "2rem",
                  lineHeight: "64px",
                  color: "#000000",
                  paddingBottom: "2rem",
                }}
              >{`A photo gallery of ${blog.title}`}</div>
              <div>{blog.description}</div>
            </div>
            <img
              src={logo}
              className="project-body1-right"
              style={{ display: "flex" }}
            ></img>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingLeft: "8%",
          paddingRight: "8%",
          background:
            "linear-gradient(0deg, #272523 1.37%, #272523 70.21%, #E6E1DE 100%)",
        }}
      >
        <img
          src={blog.planningMap}
          alt=""
          style={{ width: "100%", paddingTop: "3rem" }}
        />

        <div className="project-body">
          <div className="project-body1" style={{ paddingTop: "3rem" }}>
            <div className="project-body1-left" style={{ width: "70%" }}>
              <div
                className=""
                style={{
                  fontWeight: "700",
                  fontSize: "2rem",
                  lineHeight: "64px",
                  color: "#E6E1DE",
                  paddingBottom: "2rem",
                }}
              >{`A photo gallery of ${blog.title}`}</div>
              <div style={{ color: "#E6E1DE" }}>{blog.description}</div>
            </div>

            <img
              src={blog.bannerImg}
              alt=""
              style={{ width: "100%", paddingTop: "4rem" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "8%",
          paddingRight: "8%",
          background: "#E6E1DE"
        }}
      >
        <div
          style={{
            width: "100%",
            fontSize: "2rem",
            fontWeight: "700",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          Một số hình ảnh của dự án
        </div>
      </div>
      <div style={{ paddingLeft: '8%', paddingRight: '8%', background: "#E6E1DE", paddingBottom: "3rem  "}}>
        <Gallery images={projectImage} />
      </div>
    </div>
  );
};

export default Project;