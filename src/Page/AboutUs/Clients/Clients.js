import React from "react";
import "./Clients.css"
import vector from "../../../assets/aboutUs/Vector.png";
import Header from "../../../components/Header/Header";

export default function Clients() {
    const partnership = [
        {name: "British Council", image: require("../../../assets/HomePage/BritishCouncil.png"), position: 0},
        {name: "Ignou", image: require("../../../assets/HomePage/Ignoupng.png"), position: 0},
        {name: "Goethe Institut", image: require("../../../assets/HomePage/GoetheInstitut.png"), position: 0},
        {name: "JapanFoundation", image: require("../../../assets/HomePage/JapanFoundation.png"), position: 1},
        {name: "British Council", image: require("../../../assets/HomePage/BritishCouncil.png"), position: 1}
    ]
    return (
        <div className="clients-container">
            <Header headerStatus={false} headerColor={"black"} background={"#E6E1DE"}/>
            <div className="top">
                <div className="homepage-header-container">
                    <div className="header-text-container products-header" style={{width:"100%"}}>
                        <img src={vector} alt="" className="vector" />
                        <div className="header-text">Đối tác chiến lược</div>
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
                <div className="clients-content">
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
                </div>
            </div>
            <div className="bottom">
                <div className="homepage-header-container">
                    <div className="header-text-container products-header" style={{width:"100%"}}>
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
                <div className="clients-content">
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

        </div>
    )
}