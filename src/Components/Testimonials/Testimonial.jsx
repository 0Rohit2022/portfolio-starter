import React from "react";
import "./Testimonial.css";
import Pagination from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
function Testimonial() {
  const clients = [
    {
      review:
        "My name is Rohit Kumar, a passionate FullStack Web developer currently based in Ahmedabad. I have at least 1+ year of experience in internships as well as in building projects and developing.",
    },
    {
      review:
        "With fervent passion, I strive to help establish or strengthen your online brand by effectively conveying personal or business narratives to a broader audience through profound insight and dedication.",
    },
    {
      review:
        "With an entrepreneurial spirit, I excel in crafting exceptional web applications and websites, prioritizing precise client requirements in the face of a competitive landscape.",
    },
    {
      review:
        "I continuously pursue new skills to enhance my value as a developer, firmly adhering to specialization as I believe in mastering specific domains for greater expertise.",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Passionate beginning to a proficient developer journey </span>
        <span>About Me..</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Slider */}
      <Swiper
        modules={Pagination}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonial;
