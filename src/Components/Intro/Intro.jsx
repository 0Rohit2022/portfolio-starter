import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Me from "../../img/me.png";
// import Boy from "../../img/boy.png";
import ThumbUp from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";

function Intro() {
  const transition  = {duration : 2 , type : 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const elementStyle = {
      width: "285px",
      height: "406px",
      marginLeft: "50px",
    
    };
    
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Rohit Kumar</span>
          {/* ADD some text about your experience */}
          <span>
            A Full Stack Developer proficient in both front-end and back-end
            development, with a comprehensive understanding of web technologies
            and frameworks.
          </span>
        </div>

        <Link spy={true} to="Contact" smooth={true}>
          <button className=" button i-button" id="Contacts">
            Hire Me
          </button>
        </Link>

        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        {/* <img src={Boy} alt=""/> */}
        <img style={elementStyle} src={Me} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={ThumbUp} txt1="Mobile" txt2="Developer" />
        </motion.div>

        {/* Blur Divs */}
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238 218 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        >
          {" "}
        </div>
      </div>
    </div>
  );
}

export default Intro;





