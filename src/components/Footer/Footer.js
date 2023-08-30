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
                    <p style={{width:"50%"}}>
                    </p>
                </div>
                <div className="right">
                    <div className="top-heading">
                        Chúng tôi luôn cung cấp dịch vụ thiết kế tỉ mỉ nhất
                    </div>

                    <Button
                        className="right-button"
                        styles={{
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
                        Đăng ký để nhận tin tức mới nhất
                    </div>

                    <div className="left-button">
                        <Button className="left-button"
                            styles={{
                                padding: "0.05rem 1.5rem",
                                color: "#ffffff",
                                fontFamily:"SFUFutura",
                                justifyContent:"flex-start"
                            }}
                            content="Nhập email của bạn"
                            handleClick={() => moveTo("/contact")}
                        ></Button>
                    </div>

                    <div className="left-checkbox">
                        <input
                            type="checkbox"
                            onChange={() => setChecked(!isBoxChecked)}
                        ></input>
                        <span className="agreetext" style={{fontSize:"14px", width:"25rem"}}>
                            Tôi đã đọc và đồng ý nhận thông tin mới nhất từ Nội thất Kim Ngân
                        </span>
                    </div>
                </div>
                
                <div className="bottom-right">
                    <div>
                        <ul className="right-pages">
                            <li onClick={() => moveTo("/products")}>Sản phẩm</li>
                            <li onClick={() => moveTo("/projects")}>Dự án</li>
                            <li onClick={() => moveTo("/aboutus/hr")}>Về chúng tôi</li>
                            <li onClick={() => moveTo("/contact")}>Liên hệ</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="right-medias">
                            {/*<li><a href='#' className="medias" target="_blank">INSTAGRAM</a></li>*/}
                            <li><a href='https://www.facebook.com/kimnganfurniture' className="medias" target="_blank">FACEBOOK</a></li>
                            {/*<li><a href='#' className="medias" target="_blank">PINTEREST</a></li>*/}
                            {/*<li><a href='#' className="medias" target="_blank">TWITTER</a></li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
