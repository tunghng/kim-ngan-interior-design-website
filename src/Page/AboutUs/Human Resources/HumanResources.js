import React from "react";
import Header from "../../../components/Header/Header";
import vector from "../../../assets/aboutUs/Vector.png";

import "./HumanResources.css";
import section2_img from "../../../assets/HomePage/section2_img.png";
import section3_img from "../../../assets/aboutUs/section3image.png";

export default function HumanResources() {
    const section2 = [
        {title: "Tầm nhìn", icon: require("../../../assets/icon/rocket-outline.svg").default, text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},
        {title: "Sứ mệnh", icon: require("../../../assets/icon/bar-chart-outline.svg").default, text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},
        {title: "Giá trị cốt lõi", icon: require("../../../assets/icon/hardware-chip-outline.svg").default, text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
    ]

    const section4 = [
        {
            title: "Quá trình 1",
            image: require("../../../assets/aboutUs/process1.png"),
            subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            content:"Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ.Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ "
        },
        {
            title: "Quá trình 2",
            image: require("../../../assets/aboutUs/process2.png"),
            subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            content:"Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ.Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ "
        },
        {
            title: "Quá trình 3",
            image: require("../../../assets/aboutUs/process3.png"),
            subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            content:"Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ.Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ "
        },
        {
            title: "Quá trình 4",
            image: require("../../../assets/aboutUs/process4.png"),
            subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            content:"Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ.Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ "
        }
    ]
    return (
        <div className="hr-container">
            <Header headerStatus={false} headerColor={"black"} background={"#E6E1DE"}/>
            <div className="top">
                <div className="homepage-header-container">
                    <div className="header-text-container products-header" style={{width:"100%"}}>
                        <img src={vector} alt="" className="vector" />
                        <div className="header-text">Nhân sự</div>
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
            <div className="hr-content">
                <div className="section1">
                    <div className="top">
                        <div className="left">
                            <div>nhà sáng lập <span style={{fontSize:"24px", fontWeight:"700"}}>Nội thất Kim Ngân</span></div>
                            <div className="hr-text">
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
                    <div className="bottom">
                        <div className="left">
                            <img src={section2_img} alt=""/>
                            <div style={{width:"80px", height:"4px", backgroundColor:"#D59E19", borderRadius:"20px", marginTop:"50px"}} />
                            <h3 style={{color:"#D59E19", fontSize:"24px"}}>Nguyễn Thị Kim Ngân</h3>
                            <h4 style={{color:"#3D290D", fontWeight:"500", fontSize:"18px"}}>CEO of Noi That Kim Ngan</h4>
                            <p style={{color:"#64543D"}}>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris.</p>
                        </div>
                        <div className="right">
                            <div>nhà sáng lập <span style={{fontSize:"24px", fontWeight:"700"}}>Nội thất Kim Ngân</span></div>
                            <div className="hr-text">
                                <p>Do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam,
                                    nostrud exercitation ullamco laboris.Do eiusmod tempor incididunt ut labore et magna aliqua.
                                    Ut enim ad minim veniam, nostrud exercitation ullamco laboris.Do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris.Do eiusmod tempor
                                    incididunt ut labore et magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="section2-background">a</div>
                    <div className="section2-wrapper">
                        {section2.map((item, key) => {
                            return (
                                <div className="section2-content">
                                    <div style={{
                                        width:"48px",
                                        height:"48px",
                                        backgroundColor:"#E6E1DE",
                                        borderRadius:"10px",
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center"}}>
                                        <img style={{width:"30px", fontWeight:"700"}} src={item.icon} alt=""/>
                                    </div>
                                    <h2 style={{margin:0 , color:"white", fontSize:"24px"}}>{item.title}</h2>
                                    <div style={{color:"white", fontSize:"18px", fontWeight:"500"}}>{item.text}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="section3">
                    <h1 className="section3-heading">Đội ngũ</h1>
                    <img style={{width:"80%"}} src={section3_img} alt=""/>
                    <p style={{textAlign:"center", maxWidth:"924px"}}>Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được
                        làm từ gỗ sản phẩm được làm từ gỗ.Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản
                        phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ</p>
                </div>
                <div className="section4">
                    <h1 className="section4-heading">Quá trình phát triển</h1>
                    <div className="section4-content">
                        {section4.map((item, key) => {
                            return (
                                <div className="wrapper">
                                    <div className="left">
                                        <div className="upper-line"
                                             style={{
                                                 display:"flex",
                                                 alignItems:"center", gap:"27px"}}>
                                            <div className="dot"
                                                 style={{
                                                     width:"27px",
                                                     height:"27px",
                                                     borderRadius:"50%",
                                                     background: "linear-gradient(90deg, #D59E19 0%, #BB7E2F 100%)"}} />
                                            <div className="line"
                                                 style={{
                                                     background: "linear-gradient(90deg, #D59E19 0%, #BB7E2F 100%)",
                                                     opacity:"0.4",
                                                     height:"2px",
                                                     width:"252px",
                                                     backgroundImage:"linear-gradient(90deg, transparent, transparent 50%, #E6E1DE 50%, #E6E1DE 100%), linear-gradient(90deg, #D59E19 0%, #BB7E2F 100%)",
                                                     backgroundSize: "20px 3px, 100% 3px",
                                                     border:"none"}} />
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p>{item.subtitle}</p>
                                    </div>
                                    <div className="right">
                                        <img style={{width:"500px", height:"auto"}} src={item.image} alt=""/>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="section5">
                    <h1 className="section5-heading">Thành tích của chúng tôi</h1>
                    <div className="section5-content">
                        <div>
                            <h1>Top 1</h1>
                            <h3>Thiết kế nội thất</h3>
                        </div>
                        <div>
                            <h1>Đơn vị số 1</h1>
                            <h3>Thiết kế nội thất</h3>
                        </div>
                        <div>
                            <h1>Top 1</h1>
                            <h3>Thiết kế nội thất</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}