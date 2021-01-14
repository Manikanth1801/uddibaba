import React, { useEffect, useReducer, useState } from "react";
import Slide from "./Slide";
import "./memo.css";

export default function(props) {
  const initialState = {
    current: 0,
    slides: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "slides":
        return { ...state, slides: action.slides };
      case "next":
        return { ...state, current: state.current + 1 };
      case "prev":
        return { ...state, current: state.current - 1 };
      default:
        return "hello";
    }
  };

  const [{ current, slides }, dispatch] = useReducer(reducer, initialState);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const slides = props.slides.map(slide => ({
      slide,
      className: "Carousel-single"
    }));
    slides[0].className = "Carousel-single Carousel-active";
    slides[1].className = "Carousel-single Carousel-proactive";
    dispatch({
      type: "slides",
      slides
    });
    setTimeout(() => {
      const height = document.getElementsByClassName(
        "Carousel-single Carousel-active"
      )[0].clientHeight;
      setHeight(height);
      window.addEventListener("resize", windowReseize);
    });
    return () => {
      window.removeEventListener("resize", windowReseize);
    };
  }, [props.slides]);

  const windowReseize = e => {
    const height = document.getElementsByClassName(
      "Carousel-single Carousel-active"
    )[0].clientHeight;
    setHeight(height);
  };

  const goToPrevSlide = () => {
    if (current - 1 >= 0) {
      const newCurrent = current - 1;
      const newSlider = slides.map(slide => {
        return { ...slide, className: "Carousel-single" };
      });
      newSlider[newCurrent].className = "Carousel-single Carousel-active";
      if (newCurrent === 0) {
        newSlider[newCurrent + 1].className =
          "Carousel-single Carousel-proactive";
      } else if (newCurrent > 0) {
        newSlider[newCurrent + 1].className =
          "Carousel-single Carousel-proactive";
        newSlider[newCurrent - 1].className =
          "Carousel-single Carousel-preactive";
      }
      dispatch({
        type: "prev"
      });
      dispatch({
        type: "slides",
        slides: newSlider
      });
    }
  };

  const goToNextSlide = () => {
    if (current + 1 < slides.length) {
      const newCurrent = current + 1;
      const newSlider = slides.map(slide => {
        return { ...slide, className: "Carousel-single" };
      });
      newSlider[newCurrent].className = "Carousel-single Carousel-active";
      if (newCurrent === slides.length - 1) {
        newSlider[newCurrent - 1].className =
          "Carousel-single Carousel-preactive";
      } else if (newCurrent > 0) {
        newSlider[newCurrent + 1].className =
          "Carousel-single Carousel-proactive";
        newSlider[newCurrent - 1].className =
          "Carousel-single Carousel-preactive";
      }
      dispatch({
        type: "next"
      });
      dispatch({
        type: "slides",
        slides: newSlider
      });
    }
  };

  return (
    <>
      <div style={{ height }} className="Carousel">
        <div className="Carousel-wrapper">
          {slides.map((slide, index) => {
            return (
              <div key={index} className={slide.className}>
                <LeftArrow goToPrevSlide={goToPrevSlide} />
                <Slide
                  changeHeight={windowReseize}
                  active={index === current}
                  image={slide.slide}
                />
                <RightArrow goToNextSlide={goToNextSlide} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const LeftArrow = props => {
  return (
    <div className="Carousel-backArrow" onClick={props.goToPrevSlide}>
      <div>
        <i className="fas fa-arrow-left fa-2x" aria-hidden="true" />
      </div>
    </div>
  );
};

const RightArrow = props => {
  return (
    <div className="Carousel-nextArrow" onClick={props.goToNextSlide}>
      <div>
        <i className="fas fa-arrow-right fa-2x" aria-hidden="true" />
      </div>
    </div>
  );
};









