import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import ProfilePicture from "../../assets/warepanjabi.jpg";
import { Notifications, Search, ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="Netflix Logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src={ProfilePicture} alt="Profile" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Setting</span>
              <span>
                <Link to="/">Logout</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
