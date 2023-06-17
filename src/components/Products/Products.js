import React, { useLayoutEffect, useRef } from "react";

import { useState } from "react";

import vector from "../../assets/aboutUs/Vector.png";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";
import product5 from "../../assets/products/product5.png";

import "./Products.css";

const Products = (props) => {
  const ref = useRef(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  const imgs = [
    { id: 0, value: product1, description: "Khách sạn Toàn Thắng Stone" },
    { id: 1, value: product2, description: "Trụ sở làm việc bệnh viện Đa Khoa Cửa Đông" },
    { id: 2, value: product3, description: "Khách sạn Hải Âu Thiên Cầm " },
    { id: 3, value: product4, description: "Khách sạn Cửa Đông Luxury" },

  ];

  const [imageData, setImageData] = useState(imgs[0]);

  const handleClick = (index) => {
    const image = imgs[index];
    setImageData(image);
  };

  return (
    <div className="products-container" ref={ref}>
      <div className="product-front">
        <div
          className="header-text-container products-header"
          style={{ width: "100%" }}
        >
          <img src={vector} alt="" className="vector" />
          <div className="header-text">Dự án</div>
        </div>

        <div className="header-subtext product-subtext">
          <div className="header-subtext-content" style={{width: "60%"}}>
            Mỗi công trình của nội thất Kim Ngân được làm nên từ tâm huyết và
            sáng tạo của đội ngũ. Chúng tôi luôn muốn truyền cảm hứng và đưa đến
            cho quý khách hàng giá trị thật cùng với những trải nghiệm mới mẻ.
          </div>
        </div>

        <div className="product-bottom">
          <div className="bottom-sections">
            {imgs.map((data, i) => (
              <div
                className={imageData.id === i ? "clicked" : "section-name"}
                key={data.id}
                onClick={() => handleClick(i)}
              >
                {data.description}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-behind" style={{ height: `${height}px` }}>
        {imageData.id === 0 && (
          <div
            className="product-image"
            style={{
              backgroundImage: `url(${imageData.value})`,
              height: `${height}px`,
            }}
          />
        )}

        {imageData.id === 1 && (
          <div
            className="product-image"
            style={{
              backgroundImage: `url(${imageData.value})`,
              height: `${height}px`,
            }}
          />
        )}

        {imageData.id === 2 && (
          <div
            className="product-image"
            style={{
              backgroundImage: `url(${imageData.value})`,
              height: `${height}px`,
            }}
          />
        )}

        {imageData.id === 3 && (
          <div
            className="product-image"
            style={{
              backgroundImage: `url(${imageData.value})`,
              height: `${height}px`,
            }}
          />
        )}

        {imageData.id === 4 && (
          <div
            className="product-image"
            style={{
              backgroundImage: `url(${imageData.value})`,
              height: `${height}px`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
