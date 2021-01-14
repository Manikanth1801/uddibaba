import React, { useRef } from "react";

const Slide = ({ image, style, active, changeHeight }) => {
  const slideRef = useRef(null);

  const loaded = () => {
    if (active) {
      changeHeight();
    }
  };
  return (
    <div ref={slideRef} style={style} className={`Carousel-single-content`}>
      <img onLoad={loaded} src={image} alt="img" />
    </div>
  );
};

export default Slide;
