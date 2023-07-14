import "./Products.css";
import vector from "../../assets/aboutUs/Vector.png";
import log from "../../assets/productPage/log.png";
import other1 from "../../assets/productPage/other_product1.png";
import other2 from "../../assets/productPage/other_product2.png";
import xuong_go_1 from "../../assets/productPage/xuong_go_1.png";
import xuong_go_2 from "../../assets/productPage/xuong_go_2.png";
import xuong_go_3 from "../../assets/productPage/xuong_go_3.jpeg";
import xuong_go_4 from "../../assets/productPage/xuong_go_4.jpeg";
import xuong_go_5 from "../../assets/productPage/xuong_go_5.jpeg";

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import React, {useState} from "react";

export default function Products() {
    const [header, setHeader] = useState(false);

    const banner = [
        {
            text: "Nội thất Kim Ngân luôn tự hào và đảm bảo về sản phẩm chất lượng đồ gỗ nhờ có hai xưởng sản xuất với năng lực vượt trội. 2 cơ sở xưởng đáp ứng mọi tiêu chuẩn và yêu cầu cao về quy mô, nhân lực, máy móc, chất lượng sản phẩm, tiến độ và giá thành. Các công trình hoàn thiện là minh chứng rõ nhất cho sự nỗ lực và học hỏi không ngừng của Kim Ngân."
        },
        {
            text: "Đối với chúng tôi, nội thất không chỉ là những tấm gỗ thông thường mà chúng mang tinh thần và tâm huyết của đội ngũ làm ra. Mỗi sản phẩm đều cần được hoàn thiện chỉnh chu và tỉ mỉ đến từng chi tiết nhỏ. Với tổng diện tích 3.700m2 được vận hành bởi trên 80 công nhân lành nghề, là thợ bậc 3 trở lên và quản lý nhà xưởng có trình độ Đại học, công nhân bậc cao, đảm bảo đáp ứng được cả những sản phẩm có thiết kế cầu kỳ và phức tạp nhất."
        },
    ];

    const subSection = [
        {
            text: "Bên cạnh đó, Kim Ngân luôn chú trọng vào hệ thống dây chuyền công nghệ sản xuất để tối ưu chất lượng và tiến độ. Trang thiết bị hiện đại bao gồm máy cắt CNC, máy dán cạnh tự động, lò sấy sóng cao tần, máy khoan giàn… liên tục được bảo trì và cập nhật. Xưởng có thể sản xuất đồ gỗ tự nhiên và gỗ công nghiệp quy mô lớn, đảm bảo tiến độ  bàn giao và chất lượng sản phẩm cho các công trình thi công."
        },
        {
            text: "Đặc biệt, với hơn 20 năm trong ngành, Kim Ngân đã trở thành đối tác lâu dài của các nhà phân phối độc quyền vật tư nội thất. Nhờ có được mức giá ưu đãi của các đối tác mà chúng tôi có lợi thế cạnh tranh về giá cả và chất lượng."
        },
        {
            text: "Sự đa dạng trong các loại gỗ là một điều tự hào của nội thất Kim Ngân. Chúng tôi có nguồn nguyên liệu đầy đủ các loại gỗ tự nhiên đến gỗ công nghiệp, phù hợp với mọi yêu cầu khắt khe của các công trình cao cấp, đảm bảo sự tương đồng và thống nhất cho dự án."
        },
        {
            text: "Sau khi bàn giao, quý khách hàng sẽ nhận được sự chăm sóc và bảo hành chu đáo bởi đối với Kim Ngân, chất lượng chính là yếu tố giữ chân khách hàng và giá trị cốt lõi cần phải giữ gìn."
        }
    ]

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
        <div className="homepage-header-container">
          <div className="header-text-container products-header">
            <img src={vector} alt="" className="vector" />
            <div className="header-text" style={{color:"white"}}>Sản phẩm gỗ thật</div>
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
                Xưởng gỗ Kim Ngân
            </div>
              {banner.map((item, index) => {
                return (
                  <div
                    style={{
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "24px",
                        marginBottom: "1rem",
                    }}
                  >
                    {item.text}
                  </div>
                )
              })}
          </div>
          <div className="bot-right"></div>
        </div>
      </div>

      <div className="description">
        <div className="description-left">
          <img
            src={log}
            alt=""
          />
        </div>

        <div className="description-right">
          {subSection.map((item, index) => {
            return (
              <div
                style={{
                  fontWeight: "400",
                  fontSize: "1rem",
                  lineHeight: "24px",
                  marginBottom: "1rem",
                }}
              >
                {item.text}
              </div>
            )
          })}
        </div>
      </div>

      <div className="album">
        <div
          className="album-header"
          style={{
            width: "50%",
            paddingBottom: "3rem",
          }}
        >
          <div
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: "40px",
              marginBottom: "0rem",
            }}
          >
            Album ảnh
          </div>
        </div>

        <div className="pics">
          <div className="first-line">
            <img
              src={xuong_go_2}
              alt=""
              style={{
                width: "49%",
                height:"auto",
                objectFit:"cover"
              }}
            />
            <img
              src={xuong_go_3}
              alt=""
              style={{
                width: "49%"
              }}
            />
          </div>

          <div className="second-line">
            <img
              src={xuong_go_1}
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
              src={xuong_go_4}
              alt=""
              style={{
                width: "49%",
              }}
            />
            <img
              src={xuong_go_5}
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

        <div className="other-project">
          <div className="img__wrap">
            <img className="img__img" src={other1} alt="" />
            <div className="img__description_layer">
                  <div className="text">
                    <div
                      className="title"
                    >
                      Title 1
                    </div>
                    <div className="body">
                      Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                      được làm từ gỗ sản phẩm
                    </div>
                    <Button
                      className="btn"
                      styles={{

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
                    >
                      Title 1
                    </div>
                    <div className="body">
                      Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                      được làm từ gỗ sản phẩm
                    </div>
                    <Button
                      className="btn"
                      styles={{
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
                    >
                      Title 1
                    </div>
                    <div className="body">
                      Các sản phẩm được làm từ gỗ sản phẩm được làm từ gỗ sản phẩm
                      được làm từ gỗ sản phẩm
                    </div>
                    <Button
                      className="btn"
                      styles={{
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
