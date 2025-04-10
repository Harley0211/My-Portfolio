import React from "react";
import "./navbar.css";
import logo from "../../assets/Logo-yllw.png";
import contactIcon from '../../assets/message.svg'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav class="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div class="desktopMenu">
        <Link class="desktopMenuListItem">Home</Link>
        <Link class="desktopMenuListItem">About</Link>
        <Link class="desktopMenuListItem">Portfolio</Link>
      </div>

      <button class="desktopMenuBtn">
        <img src={contactIcon} alt="" class="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
