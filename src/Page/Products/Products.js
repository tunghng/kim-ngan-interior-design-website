import "./Products.css";
import vector from "../../assets/aboutUs/Vector.png";
import log from "../../assets/productPage/log.png";
import img1 from "../../assets/productPage/dummy1.png";
import img2 from "../../assets/productPage/dummy2.png";
import img3 from "../../assets/productPage/dummy3.png";
import long_img from "../../assets/productPage/wide_dummy.png";
import other1 from "../../assets/productPage/other_product1.png";
import other2 from "../../assets/productPage/other_product2.png";

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import React, {useState} from "react";

export default function Products() {
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
    <div>
        <Header headerStatus={header}/>
      <div className="banner">
        <div className="banner-header">
          <div className="header-top">
            <img src={vector} alt="" />
            <div>Sản phẩm gỗ thật</div>
          </div>

          <div className="header-bot">
            Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được
            làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
          </div>
        </div>

        <div className="banner-bot">
          <div className="bot-left">
            <div
              style={{
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Project Overview
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "1rem",
                lineHeight: "24px",
                marginBottom: "1rem",
              }}
            >
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere. Online learning with us does not
              interfere with your daily life. because learning can be done
              anytime and anywhere.{" "}
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "1rem",
                lineHeight: "24px",
              }}
            >
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </div>
          </div>
          <div className="bot-right"></div>
        </div>
      </div>

      <div className="description">
        <div className="description-left">
          <img
            src={log}
            alt=""
            style={{
              width: "30rem",
            }}
          />
        </div>

        <div className="description-right">
          <div
            style={{
              fontWeight: "700",
              marginBottom: "1rem",
              color: "background: #3D290D",
              fontSize: "1.5rem",
            }}
          >
            Project Overview
          </div>

          <div
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "24px",
              marginBottom: "1rem",
              color: "background: #3D290D",
            }}
          >
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere.{" "}
          </div>
          <div
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "24px",
              marginBottom: "1rem",
              color: "background: #3D290D",
            }}
          >
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere.{" "}
          </div>
          <div
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "24px",
              color: "background: #3D290D",
            }}
          >
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere.
          </div>
        </div>
      </div>

      <div className="album">
        <div
          className="album-header"
          style={{
            width: "50%",
            paddingBottom: "6rem",
          }}
        >
          <div
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: "40px",
              marginBottom: "1rem",
            }}
          >
            Album ảnh
          </div>
          <div
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được
            làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ{" "}
          </div>
        </div>

        <div className="pics">
          <div className="first-line">
            <img
              src={img1}
              alt=""
              style={{
                width: "49%",
              }}
            />
            <img
              src={img2}
              alt=""
              style={{
                width: "49%",
              }}
            />
          </div>

          <div className="second-line">
            <img
              src={long_img}
              alt=""
              style={{
                width: "100%",
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
              }}
            />
          </div>

          <div className="third-line">
            <img
              src={img3}
              alt=""
              style={{
                width: "49%",
              }}
            />
            <img
              src={img2}
              alt=""
              style={{
                width: "49%",
              }}
            />
          </div>
        </div>
      </div>

      <div className="other">
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "40px",
            marginBottom: "1rem",
          }}
        >
          Các album ảnh khác
        </div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            width: "50%",
            paddingBottom: "4rem",
          }}
        >
          Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm
          từ gỗ sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ
        </div>

        <div className="other-project">
          <div className="img__wrap">
            <img className="img__img" src={other1} alt="" />
            <div className="img__description_layer">
                  <div className="text">
                    <div
                      className="title"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "24px",
                        lineHeight: "40px",
                        marginBottom: "1rem",
                      }}
                    >
                      Title 1
                    </div>
                    <div className="body">
                      Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                      được làm từ gỗ sản phẩm
                    </div>
                    <Button
                      styles={{
                        height: "2.5rem",
                        width: "7.5rem",
                        padding: "0.05rem 1.5rem",
                        color: "#ffffff"
                      }}
                      content="Xem thêm"
                      // handleClick={() => moveTo("/")}
                    />
                  </div>
            </div>
          </div>

          <div className="img__wrap">
            <img className="img__img" src={other2} alt="" />
            <div className="img__description_layer">
                <div className="text">
                    <div
                      className="title"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "24px",
                        lineHeight: "40px",
                        marginBottom: "1rem",
                      }}
                    >
                      Title 1
                    </div>
                    <div className="body">
                      Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                      được làm từ gỗ sản phẩm
                    </div>
                    <Button
                      styles={{
                        height: "2.5rem",
                        width: "7.5rem",
                        padding: "0.05rem 1.5rem",
                        color: "#ffffff"
                      }}
                      content="Xem thêm"
                      // handleClick={() => moveTo("/")}
                    />
                </div>
            </div>
          </div>

          <div className="img__wrap">
            <img className="img__img" src={other1} alt="" />
            <div className="img__description_layer">
                <div className="text">
                    <div
                      className="title"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "24px",
                        lineHeight: "40px",
                        marginBottom: "1rem",
                      }}
                    >
                      Title 1
                    </div>
                    <div className="body">
                      Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                      được làm từ gỗ sản phẩm
                    </div>
                    <Button
                      styles={{
                        height: "2.5rem",
                        width: "7.5rem",
                        padding: "0.05rem 1.5rem",
                        color: "#ffffff"
                      }}
                      content="Xem thêm"
                      // handleClick={() => moveTo("/")}
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
