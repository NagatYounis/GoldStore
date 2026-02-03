import imge1 from "../assets/pexels-say-straight-1400349-2735981.jpg";
import image2 from "../assets/pexels-shish-jewels-1097890791-32501477.jpg";
import image3 from "../assets/pexels-the-glorious-studio-3584518-15491852.jpg";
import imge4 from "../assets/sapphire-ring-2119613_1280.jpg";
import { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Collection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cardd",
        { opacity: 0 },         
        { 
          opacity: 1,          
          stagger: 0.25,        
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: 1.2,
            invalidateOnRefresh: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef} className="w-full  bg-[#333] px-33   st flex flex-col gap-5 p-5  ">
      <div className="flex gap-3 items-center">
        <div className=" cardd w-[50%] h-55 relative group cursor-pointer rounded-2xl h-75">
          <div className="absolute w-[100%] h-[100%] bg-gray-500/20 z-15 gap-5 rounded-2xl  text-white px-3 pt-13 md:flex md:justify-between md:items-start md:flex-col">
            <h3 className="text-xs md:text-3xl">Moments Collection</h3>
            <a href="#" className="underline">
              Shop Now
            </a>
          </div>
          <img
            src={imge4}
            alt=""
            className="w-full  relative z-2 h-75 object-cover  rounded-2xl"
          />
        </div>
        <div className=" cardd w-[50%] h-55 relative group cursor-pointer rounded-2xl h-75">
          <div className="absolute w-[100%] h-[100%] bg-gray-500/20 z-15 gap-5 rounded-2xl  text-white  px-3 pt-13 md:flex md:justify-between md:items-start md:flex-col">
            <h3 className="text-xs md:text-3xll">Moments Collection</h3>
            <a href="#" className="underline">
              Shop Now
            </a>
          </div>
          <img
            src={imge1}
            alt=""
            className="w-full  relative z-2 h-75 object-cover  rounded-2xl"
          />
        </div>
      
      </div>
      <div className="flex gap-3 items-center">
        <div className="cardd w-[50%] h-55 relative group cursor-pointer rounded-2xl h-75">
          <div className="absolute w-[100%] h-[100%] bg-gray-500/20 z-15 gap-5 rounded-2xl  text-white px-3 pt-13 md:flex md:justify-between md:items-start md:flex-col">
            <h3 className="text-xs md:text-3xl">Moments Collection</h3>
            <a href="#" className="underline">
              Shop Now
            </a>
          </div>
          <img
            src={image3}
            alt=""
            className="w-full  relative z-2 h-75 object-cover  rounded-2xl"
          />
        </div>
        <div className=" cardd w-[50%] h-55 relative group cursor-pointer rounded-2xl h-75">
          <div className="absolute w-[100%] h-[100%] bg-gray-500/20 z-15 gap-5 rounded-2xl  text-white px-3 pt-13 md:flex md:justify-between md:items-start md:flex-col">
            <h3 className="text-xs md:text-3xl">Moments Collection</h3>
            <a href="#" className="underline">
              Shop Now
            </a>
          </div>
          <img
            src={image2}
            alt=""
            className="w-full  relative z-2 h-75 object-cover  rounded-2xl"
          />
        </div>
      
      </div>
  
    </div>
  );
};

export default Collection;
