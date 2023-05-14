import React from "react";

import "./Header.css";

import { useState } from "react";

import { moveTo } from "../../utils/HelperFunction";

import brand_logo from "../../assets/navbar/brand_logo.png";

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
                    <li onClick={() => moveTo("/products")}>Sản phẩm</li>
                    <li onClick={() => moveTo("/projects")}>Dự án</li>
                    <li className="aboutUs-button">
                        <div className="aboutUs-title">Về chúng tôi</div>
                        <div className="aboutUs-pop-up">
                            <div className="up" onClick={() => moveTo("/aboutus")}>Nhân sự</div>
                            <div className="down" onClick={() => moveTo("/aboutus")}>Clients</div>
                        </div>
                    </li>
                    <li onClick={() => moveTo("/contact")}>Liên hệ</li>
                </ul>
            </div>

            <div className="blank">blank</div>
        </div>
    );
};

export default Header;
