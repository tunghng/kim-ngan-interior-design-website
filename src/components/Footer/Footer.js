import React from "react";

import { useState } from "react";

import "./Footer.css";

import Button from "../Button/Button";

import { moveTo } from "../../utils/HelperFunction";

const Footer = (props) => {
    const [isBoxChecked, setIsBoxChecked] = useState(false);

    const setChecked = (newBoxState) => {
        setIsBoxChecked(newBoxState);
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="top-heading">
                    We provide best handpicked home decor
                </div>

                <Button
                    styles={{
                        height: "3rem",
                        width: "20rem",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        padding: "0.05rem 1.5rem",
                        color: "#ffffff",
                    }}
                    content="Khám phá tất cả sản phẩm"
                    handleClick={() => moveTo("/")}
                ></Button>
            </div>

            <div className="footer-bottom">
                <div className="bottom-left">
                    <div className="left-heading">
                        Subscribe to receive grape news & offers
                    </div>

                    <div className="left-button">
                        <Button
                            styles={{
                                height: "3rem",
                                width: "22rem",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                padding: "0.05rem 1.5rem",
                                color: "#ffffff",
                            }}
                            content="Enter your email"
                            handleClick={() => moveTo("/")}
                        ></Button>
                    </div>

                    <div className="left-checkbox">
                        <input
                            type="checkbox"
                            onChange={() => setChecked(!isBoxChecked)}
                        ></input>
                        <span class="agreetext">
                            I've read the Privacy Policy and I consent to Halal
                            Interior sending me marketing communications
                        </span>
                    </div>
                </div>
                
                <div className="bottom-right">
                    <div>
                        <ul className="right-pages">
                            <li>Product</li>
                            <li>Services</li>
                            <li>Article</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    
                    <ul className="right-medias">
                        <li><div className="medias">INSTAGRAM</div></li>
                        <li><div className="medias">FACEBOOK</div></li>
                        <li><div className="medias">PINTEREST</div></li>
                        <li><div className="medias">TWITTER</div></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
