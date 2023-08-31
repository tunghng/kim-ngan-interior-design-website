// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { galleryData } from "../../../config/galleryData";

// import "./PhotoAlbum.css";
// import { Link } from "react-router-dom";
// import vector from "../../../assets/aboutUs/Vector.png";

// import { Gallery } from "react-grid-gallery";

// const PhotoAlbum = () => {
//   const { id } = useParams();
//   const [gallery, setGallery] = useState(<div>hello</div>);

//   useEffect(() => {
//     let gallery = galleryData.find((gallery) => gallery.id === parseInt(id));
//     if (gallery) {
//       setGallery(gallery);
//     }
//   }, []);

//   return (
//     <div className="gallery">
//       <div
//         className="gallery-goBack"
//         style={{
//           width: "100%",
//         }}
//       >
//         <span>
//           <Link to="/projects">Projects</Link>
//         </span>
//         <span>{`>`}</span> <span>{gallery.title}</span>
//       </div>

//       <div className="gallery-header">
//         <div className="gallery-top">
//           <img src={vector} alt="" />
//           <div>{gallery.title}</div>
//         </div>

//         <div className="gallery-bot">{gallery.description}</div>
//       </div>
//       <div
//         style={{
//           paddingBottom: "3rem  ",
//         }}
//       >
//         <Gallery images={gallery.imgs} />
//       </div>
//     </div>
//   );
// };

// export default PhotoAlbum;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { galleryData } from "../../../config/galleryData";
import logo from "../../../assets/project/logo.png";

import "./PhotoAlbum.css";
import { Link } from "react-router-dom";
import vector from "../../../assets/aboutUs/Vector.png";

import { Gallery } from "react-grid-gallery";
import Header from "../../../components/Header/Header";

const PhotoAlbum = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(<div>hello</div>);

  useEffect(() => {
    let blog = galleryData.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div>
      <Header
        headerStatus={false}
        headerColor={"black"}
        background={"#E6E1DE"}
      />
      <div className="project-item" style={{ background: "#E6E1DE" }}>
        <div className="project-goBack">
          <span>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              Projects
            </Link>
          </span>
          <span>{` > `}</span> <span>{blog.title}</span>
        </div>

        <div className="project-top">
          <img src={vector} alt="" />
          <div>{blog.title}</div>
        </div>

        <div className="project-body">
          <div
            className="project-body1"
            style={{
              display: "flex",
              paddingTop: "3rem",
              gap: "6rem",
              justifyContent: "space-between",
            }}
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
              alt=""
            ></img>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingLeft: "8%",
          paddingRight: "8%",
          background: "#E6E1DE",
          paddingBottom: "3rem",
        }}
      >
        <Gallery images={blog.imgs} id="images" />
      </div>
    </div>
  );
};

export default PhotoAlbum;
