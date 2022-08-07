import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg";

const Home = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <div className="home">
      {/* <divi className="relative pt-8 pl-8 pb-8 "> */}
      <div className="flex justify-between items-center pt-8 pl-8 pb-8">
        <div>
          <img src={logo} alt={"site-logo"} className="logo" />
        </div>
        <button
          className={`menu-btn ${!menuClicked ? "" : "close"}`}
          onClick={toggleMenu}
        >
          <span className="sr-only">menu</span>
        </button>
        <div className="nav-bgD">
          <nav
            className={`flex mobile-nav nav-bg uppercase letter-spacing-3 justify-center items-center hover:cursor-pointer ff-barlow-cond ${
              menuClicked ? "mobile-nav_clicked" : ""
            }`}
          >
            <a>
              <span className="ml-2 mr-3 font-bold ">00</span>home
            </a>
            <a>
              <span className="ml-2 mr-3 font-bold">01</span>destination
            </a>
            <a>
              <span className="ml-2 mr-3 font-bold">02</span>crew
            </a>
            <a>
              <span className="ml-2 mr-3 font-bold">03</span>technology
            </a>
          </nav>
        </div>
      </div>
      {/* </divi> */}
      <div className="grid-container">
        <div className="">
          <h1 className="text-accent uppercase letter-spacing-3 fs-500">
            So, you want to travel to
            <span className="block fs-900 ff-bellafair uppercase text-white">
              Space
            </span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="">
          <button className="explore uppercase ff-bellafair">explore</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
