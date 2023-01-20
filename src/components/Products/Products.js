import React from "react";

import { useState } from "react";

import vector from "../../assets/aboutUs/Vector.png";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";
import product5 from "../../assets/products/product5.png";

import "./Products.css";

const Products = (props) => {
    const imgs = [
        { id: 0, value: product1, description: "Trendy Sofa Set" },
        { id: 1, value: product2, description: "Minimal & Modern Chairs" },
        { id: 2, value: product3, description: "Accesories For Room" },
        { id: 3, value: product4, description: "Kitchen Items" },
        { id: 4, value: product5, description: "Outdoor Decor" },
    ];

    const [imageData, setImageData] = useState(imgs[0]);

    const handleClick = (index) => {
        const image = imgs[index];
        setImageData(image);
    };

    return (
        <div className="products-container">
            <div className="header-text-container products-header">
                <img src={vector} alt="" className="vector" />
                <div className="header-text">Sản phẩm của chúng tôi</div>
            </div>

            <div className="header-subtext product-subtext">
                Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
            </div>

            <div className="product-bottom">
                {imageData.id == 0 &&
                    <img className="product-image-left" src={imageData.value} />
                }

                {imageData.id == 2 &&
                    <img className="product-image-left" src={imageData.value} />
                }

                {imageData.id == 4 &&
                    <img className="product-image-left" src={imageData.value} />
                }
                
                {imageData.id == 1 &&
                    <img className="product-image-right" src={imageData.value} />
                }

                {imageData.id == 3 &&
                    <img className="product-image-right" src={imageData.value} />
                }

                <div className="bottom-sections">
                    {imgs.map((data, i) => (
                        <div
                            className={imageData.id == i ? "clicked" : "section-name"}
                            key={data.id}
                            onClick={() => handleClick(i)}
                        >
                            {data.description}
                        </div>
                    ))}
                </div>

                {imageData.id == 0 &&
                    <img className="product-image-1" src={imageData.value} />
                }

                {imageData.id == 2 &&
                    <img className="product-image-right" src={imageData.value} />
                }

                {imageData.id == 4 &&
                    <img className="product-image-right" src={imageData.value} />
                }
                
                {imageData.id == 1 &&
                    <img className="product-image-left" src={imageData.value} />
                }
                
                {imageData.id == 3 &&
                    <img className="product-image-left" src={imageData.value} />
                }
            </div>
        </div>
    );
};

export default Products;
