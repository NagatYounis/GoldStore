import { useEffect, useRef } from 'react'
import twins from "../assets/twins.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
    const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 75%",
          end: "bottom 40%",
          scrub: 1.2,          // 🔥 حركة ناعمة فخمة
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        ".card",
        {
          y: 120,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.25,
          ease: "power4.out",
        }
      );
    }, boxRef);

    return () => ctx.revert();
  }, []);

  return (
    <div  ref={boxRef}  className='w-ful flex justify-center bg-[#222] text-white items-center  gap-12 st px-33'>
      <div ><img src={twins} alt="" className='w-150  card'/></div>
      <div className='card'><h1 className='text-3xl'>With IRAM diamond twin set</h1>
      <p className='text-xl'>Your journey as a bride doesn’t end at I do , it’s the beginning of adding and revamping your wedding band and ring.</p></div>
    </div>
  )
}

export default About
