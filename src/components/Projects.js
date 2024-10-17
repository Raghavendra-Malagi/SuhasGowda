import React, { useEffect, useState } from "react";
import "./Projects.css";
import { images } from "../constants/constants";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
const Projects = () => {
  const [tag, setTag] = useState("all");
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((item) => item.tag === tag));
  }, [tag]);
  const handleOpenModel = (index) => {
    setSlideNumber(index);
    setOpenModel(true);
  };
  const handleCloseBtn = () => {
    setOpenModel(false);
  };
  const handlePrev = () => {
    slideNumber === 0
      ? setSlideNumber(filteredImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const handleNext = () => {
    slideNumber + 1 === filteredImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  return (
    <div>
      {openModel && (
        <div className="sliderWrapper">
          <IoIosClose className="btnClose" onClick={handleCloseBtn} />
          <GrFormPrevious className="btnPrev" onClick={handlePrev} />
          <GrFormNext className="btnNext" onClick={handleNext} />
          <div className="fullscreenImage">
            <img
              src={`/images/${filteredImages[slideNumber].imageName}`}
              alt=""
            />
          </div>
          <div
            className="fullscreenImage_Overlay"
            onClick={handleCloseBtn}
          ></div>
        </div>
      )}
      <div className="projects_style">
        <h3>Our Projects</h3>
        <h1>Some Of Our Awesome Interior Designing Projects</h1>
        <div className="tag_buttons">
          <TagButton
            btnName="all"
            handleClick={setTag}
            tagActive={tag === "all" ? true : false}
          />
          <TagButton
            btnName="interior"
            handleClick={setTag}
            tagActive={tag === "interior" ? true : false}
          />
          <TagButton
            btnName="inprogress"
            handleClick={setTag}
            tagActive={tag === "inprogress" ? true : false}
          />
        </div>
        <div className="project_image_block">
          {filteredImages &&
            filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="project_image"
                onClick={() => handleOpenModel(index)}
              >
                <img
                  src={`/images/${image.imageName}`}
                  alt={image.id}
                  index={index}
                />
                <div className="project_image_overlay"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
const TagButton = ({ btnName, handleClick, tagActive }) => {
  return (
    <>
      <button
        onClick={() => handleClick(btnName)}
        className={`tag_button ${tagActive ? "active" : null}`}
      >
        {btnName.toUpperCase()}
      </button>
    </>
  );
};
export default Projects;
