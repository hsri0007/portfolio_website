import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReactStars from "react-stars";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Testimonial = () => {
  const clients = [
    {
      img: `https://www.upwork.com/profile-portraits/c1WU-SKn3K3f_JA6rb2C7rK-Hgp4P6M1SmiFuD5-39KM2Ekz0Hfj4Rg0TaLlBN8J3w`,
      review:
        "Extremely satisfied with the result and speed, exactly what I was looking for.Great communication, quick result, beautiful design. Srihari is the go to guy when it comes to landing pages.",
    },
    {
      img: `https://www.upwork.com/profile-portraits/c1OwpTXTeJlGwZ5-U7IA_oh1Ko6yBhP5dte7692Nt77voH-X9AIfdU9894pcqlOoCM`,
      review:
        "It was a pleasure working with Srihari on our website design/development. He was always available to speak to, did as many revisions as requested without hesitation and provided high quality work. Will be using him for future web and graphic design projects, highly recommended!",
    },
    {
      img: `https://www.upwork.com/profile-portraits/c18ciCbGzc7Ev4fXCo38pBJDsosuGxyBE8iGnV6IUG0nKe_DEctb3e0g2Faw8ZUAOZ`,
      review:
        "Srihari was simply wonderful! He was extremely detail oriented and always willing to go the extra mile to make sure my exact specifications were met! I'm extremely satisfied with his quality level of serve and will definitely keep using him moving forward, as projects come up.",
    },
    {
      img: `https://www.upwork.com/profile-portraits/c1zy4-0I_RlQ_Q3BFhbkscZ7niDRjEC8ylSIH7zPM303Po2_8CKPFYvV8FgdE5xv1e`,
      review:
        "Srihari is great in understanding the requirements and converting them into a running app. It was pleasure working with Srihari. Highly recommended.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <ReactStars
                  count={5}
                  value={5}
                  edit={false}
                  // onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
