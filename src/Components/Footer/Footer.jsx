import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'

import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rohitkumarrr2022@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://in.linkedin.com/in/rohit-kumar-a56085237"
            target="blank"
          >
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/0Rohit2022" target='blank'>
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer