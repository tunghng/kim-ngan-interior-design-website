import React from "react";

import "./Header.css";

import { useEffect, useState } from "react";

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
                    <div 
                        className="wrapper"
                        
                    >
                        <img 
                            src={brand_logo}
                            style = {{
                                width: "3rem"
                            }}
                        />
                        
                    </div>
                </div>
            </div>

            <div>
                <ul className="header-pages">
                    <li onClick={() => moveTo("/product")}>Products</li>
                    <li onClick={() => moveTo("/project")}>Projects</li>
                    <li onClick={() => moveTo("/aboutus")}>About us</li>
                    <li onClick={() => moveTo("/contact")}>Contact</li>
                </ul>
            </div>

            <div className="blank">blank</div>
        </div>
    );
};

export default Header;
