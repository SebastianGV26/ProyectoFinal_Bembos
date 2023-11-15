import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import izquierda from "../images/izquierda.png";
import derecha from "../images/derecha.png";
import slider1 from "../images/slider1.jpg";
import { images } from "../js/data_images";
import scrollIntoView from 'react-scroll-into-view'
export const Slider = () => {
  const sliderRef = useRef();
  const [currentIndex, setCurrenIndex] = useState(0);
  useEffect(() => {
    const listNode = sliderRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
        imgNode.scrollIntoView({
        behavior: "smooth"});
    }
  }, [currentIndex]);
  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrenIndex((curr) => {
        const infirstSlider = currentIndex === 0;
        return infirstSlider ? 0 : curr - 1;
      });
    } else {
      const inLastSlider = currentIndex === images.length - 1;
      if (!inLastSlider) {
        setCurrenIndex((curr) => curr + 1);
      }
    }
  };
  const gotoSlider = (slideIndex) =>{
    setCurrenIndex(slideIndex);
  }
  return (
    <section className="main-container">
      <div className="slider-container">
        <div className="container-images">
          <ul ref={sliderRef}>
            {images.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.imgUrl} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="controles" id="controles">
        <button className="prev" onClick={() => scrollToImage('prev')}>
          <img src={izquierda} alt="" />
        </button>
        <button className="next" onClick={() => scrollToImage('next')}>
          <img src={derecha} alt="" />
        </button>
      </div>
      <div className="dots-container">
        {
            images.map((_, index) =>{
                <div key={index} className={`dot-container-item`}
                onClick={()=> gotoSlider(index)}>
                    
                </div>
            })
        }
      </div>
    </section>
  );
};
