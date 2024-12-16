import React, { useRef } from "react";
import UseHoverEffect from "../hooks/UseHoverEffect";
import hridayImg from "../assets/images/hriday.png";
import hriday1Img from "../assets/images/hriday1.png";

const data = {
  img1: hridayImg,
  img2: hriday1Img,
};


const Hero = () => {
  const heroImageRef = useRef(null);

  UseHoverEffect(heroImageRef, data.img1, data.img2);

  return (
    <div className="hero container mx-auto mt-6 flex justify-center items-center overflow-hidden
    ">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
          <h1 className="translate-y-1 translate-x-1">FULLSTACK</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
          <h1 className="translate-x-0 translate-y-3 text-transform-uppercase">DEVELOPER</h1>
      </div>
        <div className="circle-left"></div>
        <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
