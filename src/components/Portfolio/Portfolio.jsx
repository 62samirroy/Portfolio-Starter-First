import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import chat from "../../img/chat.jpg";
import todo from "../../img/todolist.png";
// import HOC from "../../img/hoc.png";
import port from "../../img/portfolio.png";
import facebookapp from "../../img/facebook app.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={chat} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={todo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={facebookapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={port} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
