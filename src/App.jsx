import "./styles/main.scss";
import Navbar from "./Components/Navbar/Navbar";
import Spline from "@splinetool/react-spline";
import HorizontalScroll from "./Components/HorizontalScroll/HorizontalScroll";
import Section from "./Components/Section/Section";
import Logo from "./images/icon.png";
import { useState } from "react";
import Review from "./Components/Review/Review";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const [reviews, setReview] = useState([
    {
      name: "Jane Doe",
      rating: 5,
      comment: "Layanan yang luar biasa! Rambut saya terlihat fantastis.",
    },
    {
      name: "John Smith",
      rating: 4,
      comment: "Sangat profesional dan ramah. Pasti akan kembali lagi!",
    },
  ]);

  const addReview = (review) => {
    setReview(...reviews, review);
  };

  const [toggleMenu, setToggleMenu] = useState(true);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="App">
      <Spline scene="https://prod.spline.design/YQqdnhq6iIzGequN/scene.splinecode" />
      <nav className={toggleMenu === true ? "" : "active"}>
        <div className="itemsContainer">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <h4>Sea Salon</h4>
          <div className="navList">
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/">about</a>
              </li>
              <li>
                <a href="/">gallery</a>
              </li>
              <li>
                <a href="/">contact</a>
              </li>
            </ul>
          </div>
          <div className="burgerContainer">
            <div
              className="burgerTrigger"
              onClick={() => {
                handleToggleMenu();
              }}
            ></div>
            <div className="burgerMenu"></div>
          </div>
        </div>
      </nav>
      <headnav>
        <div className="itemsContainer">
          <div className="contents">
            <h1>
              Beauty<span> and Elegance Redefined</span>
            </h1>
          </div>
          <div className="buttons">
            <button className="one">Get Reservation</button>
            <button className="two">Review</button>
          </div>
        </div>
      </headnav>
      <Section title="Our Gallery" />
      <HorizontalScroll />
      <Review />
      <Contact />
    </div>
  );
}

export default App;
