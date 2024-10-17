import React from "react";
import SliderOne from "../assets/Slider.jpg";
import About from "../assets/About.jpg";
import { MdOutlineCheckBox } from "react-icons/md";
import "./Body.css";
import SlickSlider from "./SlickSlider";
import Projects from "./Projects";
import Contact from "./Contact";
const Body = () => {
  return (
    <div>
      <section id="home">
        <div className="body_style">
          <img src={SliderOne} alt="" />
          <div className="slider_content">
            <p>Creative Interior Design</p>
            <h1>Make Your Home Better</h1>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about_section">
          <div className="about_block1">
            <h1>2+</h1>
            <h2>Years of Experience</h2>
          </div>
          <div className="about_block2">
            <div className="image_block">
              <img src={About} alt="About Image" />
            </div>
            <div className="content_block">
              <p className="about_text">Why Choose Us?</p>
              <h2>
                We Offer You <span>Professional</span> Interior Design
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, laborum atque! Temporibus saepe eaque veritatis
                tenetur repudiandae, assumenda perferendis deserunt dolor fuga
                pariatur est molestiae velit! Pariatur illo dolores sunt! Beatae
                pariatur consequatur hic numquam dolorem incidunt expedita
                blanditiis luptatem, quas totam.
              </p>
            </div>
          </div>
        </div>
        <div className="check_list">
          <ul>
            <li>
              <MdOutlineCheckBox className="checkbox" />{" "}
              <span>2+ Years of Experience</span>
            </li>
            <li>
              <MdOutlineCheckBox className="checkbox" />{" "}
              <span>Best Interior Design</span>
            </li>
            <li>
              <MdOutlineCheckBox className="checkbox" />
              <span>Customer Satisfaction</span>
            </li>
          </ul>
        </div>
      </section>
      <section id="services">
        <div className="about_block2">
          <div className="content_block">
            <p className="about_text">Our Awesome Services</p>
            <h2>
              Awesome Interior <span>Designing</span> Services For Your Home
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, laborum atque! Temporibus saepe eaque veritatis
              tenetur repudiandae, assumenda perferendis deserunt dolor fuga
              pariatur est molestiae velit! Pariatur illo dolores sunt! Beatae
              pariatur consequatur hic numquam dolorem incidunt expedita
              blanditiis repellendus dolore architecto ipsam quia, temporibus
              accusantium quaerat dicta! Deserunt laudantium error ipsa atque
              tempora facilis! Possimus cupiditate deleniti minus alias.
              Voluptatem, quas totam.
            </p>
          </div>
          <div className="image_slider_block">
            <SlickSlider />
          </div>
        </div>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
