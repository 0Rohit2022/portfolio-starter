import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
function Navbar() {
  return (
    <>
      <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
          <div className="n-name">Rohit</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <Link
                spy={true}
                to="Navbar"
                activeClass="activeClass"
                smooth={true}
              >
                <li className="lists">Home</li>
              </Link>

              <Link spy={true} to="Services" smooth={true}>
                {" "}
                <li className="lists">Services</li>
              </Link>

              <Link spy={true} to="Experiences" smooth={true}>
                <li className="lists">Experiences</li>
              </Link>

              <Link spy={true} to="Portfolio" smooth={true}>
                <li className="lists">Portfolio</li>
              </Link>

              <Link spy={true} to="Testimonials" smooth={true}>
                <li className="lists">Testimonials</li>
              </Link>
            </ul>
          </div>
          <Link spy={true} to='Contact' smooth={true}>
                <button className="button n-button">Contact</button>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default Navbar