import React from "react";

import sample_banner from "../../assets/navbar/background.jpg"

import AboutUs from "../../components/AboutUs/AboutUs";

import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="home">
            <div className="pageContentWrapper">
                <div>
                    <img src={sample_banner} alt="" className="banner"/>
                </div>

                <AboutUs></AboutUs>
            </div>
        </div>
    );
}
