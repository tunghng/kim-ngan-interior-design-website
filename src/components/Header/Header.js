import React from "react";

import "./Header.css";

import { useEffect, useState } from "react";

import { moveTo } from "../../utils/HelperFunction";

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header-logo">
                <div className="left" onClick={() => moveTo("/")}>
                    <div className="wrapper">
                        <img src="#"></img>
                        <div>My Website</div>
                    </div>
                </div>
            </div>

            <div>
                <ul className="header-pages">
                    <li>Product</li>
                    <li>Services</li>
                    <li>Article</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="blank">blank</div>
        </div>
    );
};

export default Header;
