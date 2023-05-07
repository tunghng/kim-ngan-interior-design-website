import React from "react";

import "./Header.css";

import { useState } from "react";

import { moveTo } from "../../utils/HelperFunction";

import brand_logo from "../../assets/navbar/brand_logo.png"

const Header = (props) => {
    const [header, setHeader] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 735) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


    return (
        <div className={header ? 'header-container-active' : 'header-container'}>
            <div className="header-logo">
                <div className="left" onClick={() => moveTo("/")}>
                    <div className="wrapper">
                        <img 
                            src={brand_logo}
                            style = {{
                                width: "3rem"
                            }}
                            alt=""/>
                    </div>
                </div>
            </div>

            <div>
                <ul className="header-pages">
                    <li onClick={() => moveTo("/")}>Trang chủ</li>
                    <li onClick={() => moveTo("/product")}>Sản phẩm</li>
                    <li onClick={() => moveTo("/project")}>Dự án</li>
                    <li onClick={() => moveTo("/aboutus")}>Về chúng tôi</li>
                    <li onClick={() => moveTo("/contact")}>Liên hệ</li>
                </ul>
            </div>

            <div className="blank">blank</div>
        </div>
    );
};

export default Header;
