import React from "react";
import "./Header.css";
import Navigation from "./Navigation";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="main_nav">
        <div className="contact_details">
          <h1>Contact : +919999999999</h1>
        </div>
        <ul>
          <li>
            <a href="javaScript:void(0)">
              <FaXTwitter className="icon" />
            </a>
          </li>
          <li>
            <a href="javaScript:void(0)">
              <FaFacebookF className="icon" />
            </a>
          </li>
          <li>
            <a href="javaScript:void(0)">
              <FaLinkedinIn className="icon" />
            </a>
          </li>
          <li>
            <a href="javaScript:void(0)">
              <FaInstagram className="icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="header_style">
        <h1>Logo</h1>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
