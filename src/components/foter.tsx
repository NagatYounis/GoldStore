import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Foter = () => {
      const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(".card", {
          opacity: 0,             // start hidden
          duration: 1,            // fade in duration
          stagger: 0.2,           // fade cards one by one
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",     // when container reaches 80% of viewport
            toggleActions: "play none none none", // play once
          },
        });
      }, containerRef);
  
      return () => ctx.revert();
    }, []);
  
  return (
    <div  ref={containerRef} className="bg-[#333] overflow-hidden   w-full lg:h-100 p-3 text-white st">
      <div className=" card container flex items-center justify-between gap-5">
        <div className="w-[350px]">
          <h1 className="text-2xl ">Contact Us</h1>
          <p className="text-gray-400/31">
            - IRAM Jewelry: 10th of Nazih Khalifa Ln, El-Montaza, Heliopolis,
            Cairo Governorate.
          </p>
          <p>
            - Egypt Gold: Zone 14, block 13038, industrial area, El-obour,
            qalyubiyya.
          </p>
        </div>
        <div className="w-[350px]  cursor-pointer flex flex-col justify-start items-center">
          <h1 className="text-2xl">Hotline</h1>
          <p className="flex">
            <span className="text-xs pt-2 mr-2">
              <FaPhone />
            </span>
            <span>19214</span>
          </p>
        </div>
        <div className="w-[350px]">
          <h1 className="text-2xl ">INFORMATION</h1>
          <ul className="">
            <li className=" cursor-pointer text-gray-500">- SEARCH</li>
            <li className=" cursor-pointer text-gray-500">- FAQs</li>
            <li className=" cursor-pointer text-gray-500">- OUR LOCATIONS</li>
            <li className=" cursor-pointer text-gray-500">- TERMS & CONDITIONS</li>
            <li className=" cursor-pointer text-gray-500">- RETURN & REFUND POLICY</li>
          </ul>
        </div>
      </div>
      <div className=" card container flex justify-between items-center">
        <div>
          <h2>follow us</h2>
          <div className="flex gap-2">
            <span className="cursor-pointer transition-all text-white hover:scale-110 hover:text-gray-600 border-2 border-white rounded-full p-1">
              {" "}
              <FaFacebookF />
            </span>
            <span className="cursor-pointer transition-all text-white hover:scale-110 hover:text-gray-600  border-2 border-white rounded-full p-1">
              <FaXTwitter />
            </span>
            <span className="cursor-pointer transition-all text-white hover:scale-110 hover:text-gray-600 border-2 border-white rounded-full p-1">
              <FaYoutube />
            </span>
            <span className="cursor-pointer transition-all text-white hover:scale-110 hover:text-gray-600 border-2 border-white rounded-full p-1">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div className="lg:px-22 ml-3 lg:ml-0">
          <form action="">
            <h2 className="text-white mb-2">Signup for newsletter</h2>
            <div className="border-b-2 border-b-gray text-gray-500 w-66 flex  justify-between mb-1 py-2">
              <input className="text-gray-500" type="text" placeholder="email@example.com" />
              <button className="text-xs">subscribe</button>
            </div>
            <div>
              {" "}
              <input type="checkbox" id="checkbox" name="" className="mr-3" />
              <label htmlFor="checkbox " className="text-white">I agree to the Terms of Service</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Foter;
