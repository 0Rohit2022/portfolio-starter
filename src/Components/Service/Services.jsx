import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import Resume from "./Rohit_resume.pdf";
import { themeContext } from "../../Context";
import {motion} from "framer-motion"
function Services() {
  const transition = {duration : 1, type: 'sprng'}
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* Start with left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Tools &</span>
        <span>Technologies</span>
        <span>
          A Full Stack Developer proficient in both front-end and back-end
          development,
          <br />
          with a comprehensive understanding of web technologies and frameworks.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Start with right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Databases"}
            detail={"MySql,MongoDB,Tools (Mysqlyog,MongoDBCompass)"}
          />
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Frontend"}
            detail={"Html, Css, JavaScript, React-Native ,React, Bootstrap"}
          />
        </motion.div>

        {/* Third Card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Backend"}
            detail={"Expressjs, Nodejs, Java, Spring Boot, Microservices"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
