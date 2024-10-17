import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { values } from "../constants/constants";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer_style">
        <div className="first_div">
          <div className="getInTouch">
            <h1>Get In Touch</h1>
            <p>
              <FaLocationDot className="icon" />
              345 Street, New York, USA
            </p>
            <p>
              <FaPhoneAlt className="icon" />
              +91 90345 67890
            </p>
            <p>
              <FaEnvelope className="icon" />
              Email@example.com
            </p>
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
          <div className="quickLinks">
            <h1>Quick Links</h1>
            <ul>
              {values.map((val) => {
                return (
                  <li key={val.id}>
                    <a href={`#${val.text}`}>{val.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright_div">
        <p>
          &copy; Site Name, All Rights Reserved. Designed by{" "}
          <a href="mailto:Raghavendramalagi94@gmail.com">RM</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
