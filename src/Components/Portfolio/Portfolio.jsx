import React, { useContext } from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import TubeTweets from '../../img/youtube.png';
import Blog from '../../img/blog.png';
import Resume from '../../img/resume.png';
import Todo from '../../img/todo.png'
import 'swiper/css'
import { themeContext } from '../../Context';

function Portfolio() {
     const theme = useContext(themeContext);
     const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* Header */}

      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://github.com/0Rohit2022/TubeTweets" target='blank'>
            <img src={TubeTweets} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/0Rohit2022/Thought-stream/tree/master/blog" target='blank'>
            <img src={Blog} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/0Rohit2022/Resume-Builder" target='blank'>
            <img src={Resume} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/0Rohit2022/TaskSecure" target='blank'>
            <img src={Todo} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio