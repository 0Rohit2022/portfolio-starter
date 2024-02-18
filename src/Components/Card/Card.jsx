import React from 'react'
import './Card.css'
function Card({emoji , heading, detail}) {//This emoji ,heading and details are coming from the Services.jsx
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href="https://github.com/0Rohit2022?tab=repositories">
        <button className="c-button">LEARN MORE</button>
      </a>
    </div>
  );
}

export default Card