import React from "react";
import GalleryItem from "./GalleryItem/GalleryItem";
import "./GalleryList.css";

const GalleryList = ({ blogs }) => {
  return (
    <div className="galleryList-wrap">
      {blogs.map((blog) => (
        <div style={{ width: "40%" }}>
          <GalleryItem blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default GalleryList;
