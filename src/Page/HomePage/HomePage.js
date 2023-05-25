import React, {useState} from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./HomePage.css";

// import required modules

import AboutUs from "../../components/AboutUsComp/AboutUs";
import Products from "../../components/Products/Products";

import "./HomePage.css";
import Button from "../../components/Button/Button";
import { moveTo } from "../../utils/HelperFunction";
import vector from "../../assets/aboutUs/Vector.png";

import section2_img from "../../assets/HomePage/section2_img.png";
import Header from "../../components/Header/Header";

export default function HomePage() {
    const [header, setHeader] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 735) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


    const partnership = [
        {name: "British Council", image: require("../../assets/HomePage/BritishCouncil.png"), position: 0},
        {name: "Ignou", image: require("../../assets/HomePage/Ignoupng.png"), position: 0},
        {name: "Goethe Institut", image: require("../../assets/HomePage/GoetheInstitut.png"), position: 0},
        {name: "JapanFoundation", image: require("../../assets/HomePage/JapanFoundation.png"), position: 1},
        {name: "British Council", image: require("../../assets/HomePage/BritishCouncil.png"), position: 1}
    ]

    return (
        <div className="w-100">
            <Header headerStatus={header}/>
            {/*banner*/}
            <div id="banner">
                <div
                    style={{
                        width: "50%",
                        fontSize: "350%",
                        fontWeight: "700"
                    }}
                >
                    We create furniture for your home and business
                </div>
            </div>

            {/*Section 2*/}
            <div className="section-2">
                <div className="left">
                    <div>nhà sáng lập <span style={{fontSize:"24px", fontWeight:"700"}}>Nội thất Kim Ngân</span></div>
                    <div className="text">
                        <p>Do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam,
                            nostrud exercitation ullamco laboris.Do eiusmod tempor incididunt ut labore et magna aliqua.
                            Ut enim ad minim veniam, nostrud exercitation ullamco laboris.Do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris.Do eiusmod tempor
                            incididunt ut labore et magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img src={section2_img} alt=""/>
                    <div style={{width:"80px", height:"4px", backgroundColor:"#D59E19", borderRadius:"20px", marginTop:"50px"}} />
                    <h3 style={{color:"#D59E19", fontSize:"24px"}}>Nguyễn Thị Kim Ngân</h3>
                    <h4 style={{color:"#3D290D", fontWeight:"500", fontSize:"18px"}}>CEO of Noi That Kim Ngan</h4>
                    <p style={{color:"#64543D"}}>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris.</p>
                </div>
            </div>

            {/*Section3*/}
            <div className="section-3">
                <div>
                    <h1>180+</h1>
                    <h2>Clients Served</h2>
                </div>
                <div>
                    <h1>10+</h1>
                    <h2>Years of experience</h2>
                </div>
                <div>
                    <h1>5+</h1>
                    <h2>Office world wide</h2>
                </div>
            </div>

            <Products></Products>

            {/*section4*/}

            <div className="section-4" style={{paddingTop: "97px", backgroundColor: "#E6E1DE"}}>
                <div className="homepage-header-container">
                    <div className="header-text-container products-header">
                        <img src={vector} alt="" className="vector" />
                        <div className="header-text">Khách hàng</div>
                    </div>
                    <div className="subHeader-text"
                         style={{
                             textAlign: "center",
                             marginTop: "20px",
                             fontWeight: "400",
                         }}
                    >
                        Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                        sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản
                        phẩm được làm từ gỗ
                    </div>
                </div>
                <div className="section4-content">
                    <div className="partnership-top-wrapper">
                        {partnership.map((item, key) => {
                            if (item.position === 0) {
                                return (
                                    <div className="partnership-top">
                                        <img src={item.image} alt=""/>
                                    </div>
                                )
                            }
                            return null
                        })}
                    </div>
                    <div className="partnership-bottom-wrapper">
                        {partnership.map((item, key) => {
                            if (item.position === 1) {
                                return (
                                    <div className="partnership-bottom">
                                        <img src={item.image} alt=""/>
                                    </div>
                                )
                            }
                            return null
                        })}
                    </div>
                </div>
            </div>

            {/*Section5*/}
            <div
                className="section-5"
                style={{
                    paddingTop: "97px",
                    backgroundColor: "#E6E1DE",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className="homepage-header-container">
                        <div className="header-text-container products-header">
                            <img src={vector} alt="" className="vector" />
                            <div className="header-text">Sản phẩm</div>
                        </div>
                        <div className="subHeader-text"
                            style={{
                                textAlign: "center",
                                marginTop: "20px",
                                fontWeight: "400",
                            }}
                        >
                            Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                            sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản
                            phẩm được làm từ gỗ
                        </div>
                    </div>
                </div>
                <div
                    className="section5-content"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "35rem",
                    }}
                >
                    <div
                        className="left-row"
                        style={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width:"100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div className="text">Sản phẩm gỗ thật</div>
                            <Button
                                styles={{
                                    height: "3rem",
                                    width: "8rem",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    padding: "0.05rem 1.5rem",
                                    color: "#ffffff",
                                }}
                                content="Khám phá"
                                handleClick={() => moveTo("/products")}
                            />
                        </div>
                    </div>
                    <div
                        className="right-row"
                        style={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width:"100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div className="text">Thiết kế nội thất</div>
                            <Button
                                styles={{
                                    height: "3rem",
                                    width: "8rem",
                                    "margin-right": "0",
                                    "margin-bottom": "0",
                                    padding: "0.05rem 1.5rem",
                                    color: "#ffffff",
                                }}
                                content="Khám phá"
                                handleClick={() => moveTo("/")}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <AboutUs></AboutUs>
        </div>
    );
}