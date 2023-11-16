import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import izquierda from "../images/izquierda.png";
import derecha from "../images/derecha.png";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import { images } from "../js/data_images";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
export const Slider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <section className="main-container">
      <div className="slider-container">
        <div className="container-images">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img src={slider1} alt="" />
              </div>
              <div className="embla__slide">
                <img src={slider2} alt="" />
              </div>
              <div className="embla__slide">
                <img src={slider3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="controles" id="controles">
        <button className="prev" onClick={() => scrollToImage("prev")}>
          <img src={izquierda} alt="" />
        </button>
        <button className="next" onClick={() => scrollToImage("next")}>
          <img src={derecha} alt="" />
        </button>
      </div>
    </section>
  );
};
