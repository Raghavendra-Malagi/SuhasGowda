import React from "react";
import About from "../assets/About.jpg";
import { aboutData } from "../../src/constants/constants";

const AboutBlock = () => {
  return (
    <div>
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
            blanditiis repellendus dolore architecto ipsam quia, temporibus
            accusantium quaerat dicta! Deserunt laudantium error ipsa atque
            tempora facilis! Possimus cupiditate deleniti minus alias.
            Voluptatem, quas totam.
          </p>
        </div>
      </div>
      {aboutData.map((item) => {
        return (
          <div className="about_block2">
            <div className="image_block">
              <img src={About} alt="About Image" />
            </div>
            <div className="content_block">
              <p className="about_text">{item.title}</p>
              <h2>{item.subTitle}</h2>
              <p>{item.paragraph}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutBlock;
