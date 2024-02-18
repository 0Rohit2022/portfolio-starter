import React, { useContext } from 'react'
import { themeContext } from '../../Context';
import './Experience.css'
function Experience() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experiences'>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          1+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>
        <span>Intern-Exp</span>
      </div>

      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          2+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
}

export default Experience