import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Service/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Works/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme  = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode ? 'black': '',
        color: darkMode ? 'white': ''
      }}
    >
    <Navbar />
    <Intro />
    <Services />
    <Experience />
    <Work />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
