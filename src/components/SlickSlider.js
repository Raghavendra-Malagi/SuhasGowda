import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosBed } from "react-icons/io";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaBath } from "react-icons/fa6";
import Slider from "react-slick";
import "./SlickSlider.css";
const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide slide1">
            <IoIosBed className="slide_icon" />
            <h3>Bedroom Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              placeat consequatur mollitia, eius officiis impedit quam minus
              facere? Modi.
            </p>
          </div>
          <div className="slide slide2">
            <MdEmojiFoodBeverage className="slide_icon" />
            <h3>Kitchen Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              placeat consequatur mollitia, eius officiis impedit quam minus
              facere? Modi.
            </p>
          </div>
          <div className="slide slide3">
            <FaBath className="slide_icon" />
            <h3>Bathroom Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              placeat consequatur mollitia, eius officiis impedit quam minus
              facere? Modi.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default SlickSlider;
