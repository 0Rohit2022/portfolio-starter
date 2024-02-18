import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useState } from "react";
import "./Contact.css";

function Contact() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done , setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o57ncee", "template_d5gb5z7", form.current, {
        publicKey: "ZQEoyzs4PFJWK-gKR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
          setTimeout(() => {
            setDone(false);
            window.location.reload();
          }, 2000);
          
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }; 

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          {console.log(form.current)}
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Enter your Name.."
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Enter your Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button send" />
          <div className="flash-message">
            <span className="message" >
              {done && "Thanks for contacting me"}
            </span>
          </div>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
