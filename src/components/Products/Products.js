import React, {useLayoutEffect, useRef} from "react";

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
        { id: 0, value: product1, description: "Trendy Sofa Set" },
        { id: 1, value: product2, description: "Minimal & Modern Chairs" },
        { id: 2, value: product3, description: "Accesories For Room" },
        { id: 3, value: product4, description: "Kitchen Items" },
        { id: 4, value: product3, description: "Outdoor Decor" },
    ];

    const [imageData, setImageData] = useState(imgs[0]);

    const handleClick = (index) => {
        const image = imgs[index];
        setImageData(image);
    };

    return (
        <div className="products-container" ref={ref}>
            <div className="product-front">
                <div className="header-text-container products-header" style={{width:"100%"}}>
                    <img src={vector} alt=""className="vector" />
                    <div className="header-text">Dự án</div>
                </div>

                <div className="header-subtext product-subtext">
                    <div className="header-subtext-content">
                        Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                        được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
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
            <div className="product-behind" style={{height:`${height}px`}}>
                {imageData.id === 0 &&
                    <div className="product-image" style={{backgroundImage:`url(${imageData.value})`, height:`${height}px`}}/>
                }

                {imageData.id === 1 &&
                    <div className="product-image" style={{backgroundImage:`url(${imageData.value})`, height:`${height}px`}}/>
                }

                {imageData.id === 2 &&
                    <div className="product-image" style={{backgroundImage:`url(${imageData.value})`, height:`${height}px`}}/>
                }

                {imageData.id === 3 &&
                    <div className="product-image" style={{backgroundImage:`url(${imageData.value})`, height:`${height}px`}}/>
                }

                {imageData.id === 4 &&
                    <div className="product-image" style={{backgroundImage:`url(${imageData.value})`, height:`${height}px`}}/>
                }
            </div>
        </div>
    );
};

export default Products;
