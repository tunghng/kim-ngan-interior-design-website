import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./HomePage.css";

import section2Img from "../../image/section2_img.png"

// import required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

import sample_banner from "../../assets/navbar/background.jpg"

import AboutUs from "../../components/AboutUs/AboutUs";

import "./HomePage.css";

export default function HomePage() {

    SwiperCore.use([Autoplay])
    const data = [
        {
            image: require("../../image/image_slider.png")
        },
        {
            image: require("../../image/image_slider.png")
        },
        {
            image: require("../../image/image_slider.png")
        }
    ]
    return (
        <div className="w-100">
            {/*banner*/}
            <div id="banner">
                <div style={{width:"50%", fontSize:"400%", fontWeight:"500", fontStyle:"italic"}}>
                    We create furniture for your home and business
                </div>
            </div>
            {/*section 1*/}
            <div className="section-1"
                 style={{
                     paddingTop:"97px",
                     paddingBottom:"97px",
                     backgroundColor:"#FCFBF7"
            }}>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{marginBottom:"5%", width:"633px"}}>
                        <div style={{textAlign:"center", fontSize:"40px", fontWeight:"600", fontStyle:"italic"}}>Section 1</div>
                        <div style={{textAlign:"center", marginTop:"20px", fontWeight:"400"}}>
                            Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                            được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={2.01}
                    spaceBetween={5}
                    slidesPerGroup={1}
                    centeredSlides={true}
                    grabCursor={true}
                    speed={700}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    autoplay={{delay: 2000}}
                    modules={[Pagination, Navigation]}
                    slideToClickedSlide={true}
                    className="mySwiper"

                >
                    <div className="swiper-wrapper">
                        {data.map((item, key) =>(
                            <SwiperSlide>{({isActive}) => (<img className={isActive ? 'swiper-slide-active' : 'swiper-slide'} src={item.image} alt="#"/>)}</SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
            {/*Section 2*/}
            <div className="section-2"
                 style={{
                     paddingTop:"97px",
                     paddingBottom:"97px",
                     backgroundColor:"#23211F",
                     color:"white"
            }}>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style={{marginBottom:"5%", width:"633px"}}>
                        <div style={{textAlign:"center", fontSize:"40px", fontWeight:"600", fontStyle:"italic"}}>Section 2</div>
                        <div style={{textAlign:"center", marginTop:"20px", fontWeight:"400"}}>
                            Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                            được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div>
                        <div className="section2-content">
                            <div>
                                <img className="section2-img" src={section2Img} alt=""/>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}>
                                <div>
                                    <div className="heading">Dự án nhà ở cao cấp</div>
                                    <div className="text" style={{maxWidth:"464px"}}>
                                        Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                                        được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                                    </div>
                                    <button className="buttonSec2">
                                        <div>Xem thêm</div> <img src="" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="section2-content">
                            <div style={{display:"flex", alignItems:"center"}}>
                                <div>
                                    <div className="heading">Dự án nhà ở cao cấp</div>
                                    <div className="text">
                                        Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                                        được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                                    </div>
                                    <button className="buttonSec2">
                                        <div>Xem thêm</div> <img src="" alt=""/>
                                    </button>
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"flex-end"}}>
                                <img className="section2-img" src={section2Img} alt=""/>
                            </div>
                        </div>
                        <div className="section2-content">
                            <div>
                                <img className="section2-img" src={section2Img} alt=""/>
                            </div>
                            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <div>
                                    <div className="heading">Dự án nhà ở cao cấp</div>
                                    <div className="text">
                                        Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                                        được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                                    </div>
                                    <button className="buttonSec2">
                                        <div>Xem thêm</div> <img src="" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="section2-content">
                            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <div>
                                    <div className="heading">Dự án nhà ở cao cấp</div>
                                    <div className="text">
                                        Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                                        được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                                    </div>
                                    <button className="buttonSec2">
                                        <div>Xem thêm</div> <img src="" alt=""/>
                                    </button>
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"flex-end"}}>
                                <img className="section2-img" src={section2Img} alt=""/>
                            </div>
                        </div>
                        <div className="section2-content">
                            <div>
                                <img className="section2-img" src={section2Img} alt=""/>
                            </div>
                            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <div>
                                    <div className="heading">Dự án nhà ở cao cấp</div>
                                    <div className="text">
                                        Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                                        được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
                                    </div>
                                    <button className="buttonSec2">
                                        <div>Xem thêm</div> <img src="" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
