import React from "react";
import { Link } from "react-router-dom";
import "./ProjectItem.css";

const ProjectItem = ({ blog: { cover, title, id } }) => {
  return (
    <>
      <Link to={`/projects/${id}`} style={{textDecoration:"none"}}>
        <div
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize:"cover",
            width: "100%",
            height: "20rem",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "48px",
            color: "#fff",
          }}
        >
          <h1
            style={{
              width:"80%",
              fontFamily: "Montserrat",
              fontWeight: "600",
              fontSize: "28px",
              textShadow: "1px 0px 0px black, -1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black"
          }}
          >
            {title}
          </h1>
        </div>
      </Link>
    </>
  );
};

export default ProjectItem;
