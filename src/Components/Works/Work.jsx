import React, { useContext } from 'react'
import './Work.css'
import at from "../../img/at.png"
import { themeContext } from '../../Context';
import {motion} from "framer-motion"
function Work() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Companies</span>
        <span> 
          Akash Technolabs
          <br />
          P.S.A
          <br />
        </span>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right side of this part */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-maincircle"
        >
          <div className="w-seccircle">
            <img src={at} style={{ height: "10rem" }} alt="Akash Technolabs" />
          </div>
          <div className="w-seccircle">
            <img src={at} style={{ height: "10rem" }} alt="P.S.A" />
          </div>
          <div className="w-seccircle">
            <img style={{ color: "black" }} alt="Akash Technolabs" />
          </div>
          <div className="w-seccircle">
            <img style={{ color: "black" }} alt="P.S.A" />
          </div>
          <div className="w-seccircle">
            <img style={{ color: "black" }} alt="Akash Technolabs" />
          </div>
        </motion.div>

        {/* Background Circles */}
        <div className="w-backcircle bluecircle"></div>
        <div className="w-backcircle yellowcircle"></div>
      </div>
    </div>
  );
}

export default Work