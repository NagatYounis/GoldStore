import Swap from './swap'
import { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Explore = () => {
    const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { y: 120, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          stagger: 0.25, 
          ease: "power4.out",
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
    <div  ref={containerRef} className='main w-full h-[70vh] p-15 flex flex-col text-white justify-center items-center'>
      <h1 className='card text-2xl'>EXPLORE</h1>
      <h3 className='card mb-10 text-7xl'>OUR CATEGORY</h3>
      <div className='card'>
      <Swap/>
      </div>
    </div>
  )
}

export default Explore
