import React from "react";
import { Link } from "react-router-dom";
import "./GalleryItem.css";

const GalleryItem = ({ blog: { cover, title, id } }) => {
  return (
    <>
      <Link to={`/projects/gallery/${id}`} style={{ textDecoration: "none" }}>
        <div
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            width: "100%",
            height: "20rem",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: "2rem",
            lineHeight: "48px",
            color: "#fff",
          }}
        >
          {title}
        </div>
      </Link>
    </>
  );
};

export default GalleryItem;
