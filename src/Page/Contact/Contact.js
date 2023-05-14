import "./Contact.css"
import vector from "../../assets/aboutUs/Vector.png";
import React from "react";
import atOutline from "../../assets/icon/at-outline.svg";
import mail from "../../assets/icon/mail.svg";
import call from "../../assets/icon/call.svg";
import location from "../../assets/icon/location.svg";

import Form from "react-bootstrap/Form";
import {FormGroup} from "react-bootstrap";

export default function Contact() {
    const input = [
        {
            question: "Tên của bạn"
        },
        {
            question: "Số điện thoại"
        },
        {
            question: "Email"
        }
    ]

    const dropdown = [
        {
            question: "Loại dự án",
            options: ["Hotel", "School", "House"]
        }
    ]
    return (
        <div className="contact-container">
            <div className="homepage-header-container">
                <div className="header-text-container products-header" style={{width:"100%"}}>
                    <img src={vector} alt="" className="vector" />
                    <div className="header-text">Leave us a message</div>
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
            <div className="contact-content">
                <div className="left">
                    <div className="up">
                        <div>
                            <div className="box"><img src={mail} alt=""/></div>
                            <p>noithatkimngan@gmail.com</p>
                        </div>
                        <div>
                            <div className="box"><img src={call} alt=""/></div>
                            <p>0988 888 888</p>
                        </div>
                    </div>
                    <div className="down">
                        <div>
                            <div className="box"><img src={location} alt=""/></div>
                            <p>Biệt thự liền kề số 14, Đường 72m, Vinh, Vietnam</p>
                        </div>
                        <div>
                            <div className="box"><img src={atOutline} alt=""/></div>
                            <p>messenger.com/ntkn</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    {input.map((item, index) => (
                        <FormGroup className="form-group">
                            <Form.Control placeholder={item.question}/>
                        </FormGroup>
                    ))}
                    {dropdown.map((item, index) => (
                        <FormGroup className="form-group">
                            <select name="">
                                <option value="" disabled selected>Loại dự án</option>
                                {item.options.map((option) => (
                                    <option>{option}</option>
                                ))}
                            </select>
                        </FormGroup>
                    ))}
                    <button>Gửi đi</button>
                </div>
            </div>
        </div>
    )
}