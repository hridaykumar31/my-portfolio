import { useEffect } from "react";
import hriday1 from "../assets/images/hriday1.png";
import HoverEffect from "hover-effect"; 

const UseHoverEffect = (el, img1, img2) => {
  useEffect(() => {
    const hoverEffectInstance = new HoverEffect({
      parent: el.current,
      image1: img1,
      image2: img2,
      displacementImage: hriday1,
      intensity: 0.5,
    });

    
    return () => hoverEffectInstance?.destroy?.();
  }, [el, img1, img2]); 
};

export default UseHoverEffect;
