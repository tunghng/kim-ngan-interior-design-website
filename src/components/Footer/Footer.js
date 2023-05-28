import React from "react";

import { useState } from "react";

import "./Footer.css";

import Button from "../Button/Button";

import { moveTo } from "../../utils/HelperFunction";
import brand_logo from "../../assets/navbar/brand_logo.png"

const Footer = (props) => {
    const [isBoxChecked, setIsBoxChecked] = useState(false);

    const setChecked = (newBoxState) => {
        setIsBoxChecked(newBoxState);
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="left">
                    <img src={brand_logo} alt="" style={{width:"8rem"}}/>
                    <h5 style={{fontWeight:"700"}}>NỘI THẤT KIM NGÂN</h5>
                    <p style={{width:"50%"}}>Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được
                        làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                    </p>
                </div>
                <div className="right">
                    <div className="top-heading">
                        We provide best handpicked home decor
                    </div>

                    <Button
                        styles={{
                            height: "3rem",
                            width: "20rem",
                            padding: "0.05rem 1.5rem",
                            color: "#ffffff",
                        }}
                        content="Khám phá tất cả sản phẩm"
                        handleClick={() => moveTo("/products")}
                    ></Button>
                </div>
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
                                padding: "0.05rem 1.5rem",
                                color: "#ffffff",
                                fontFamily:"SFUFutura",
                                justifyContent:"flex-start"
                            }}
                            content="Enter your email"
                            handleClick={() => moveTo("/contact")}
                        ></Button>
                    </div>

                    <div className="left-checkbox">
                        <input
                            type="checkbox"
                            onChange={() => setChecked(!isBoxChecked)}
                        ></input>
                        <span className="agreetext" style={{fontSize:"14px", width:"25rem"}}>
                            I've read the Privacy Policy and I consent to Halal
                            Interior sending me marketing communications
                        </span>
                    </div>
                </div>
                
                <div className="bottom-right">
                    <div>
                        <ul className="right-pages">
                            <li onClick={() => moveTo("/products")}>Product</li>
                            <li onClick={() => moveTo("/projects")}>Services</li>
                            <li>Article</li>
                            <li onClick={() => moveTo("/aboutus/hr")}>About Us</li>
                            <li onClick={() => moveTo("/contact")}>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="right-medias">
                            <li><div className="medias">INSTAGRAM</div></li>
                            <li><div className="medias">FACEBOOK</div></li>
                            <li><div className="medias">PINTEREST</div></li>
                            <li><div className="medias">TWITTER</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
