import { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
  
const Contact = () => {
const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { opacity: 0 },         // البداية: مخفي
        { 
          opacity: 1,           // النهاية: ظاهر
          stagger: 0.25,        // كل عنصر يظهر بعد التاني
          ease: "power1.out",   // easing لطيف
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
    <div ref={containerRef} className=' main h-100  pt-6'>
       <h1 className=' text-white text-center text-2xl'>Tell  US Your Inquiry</h1>
       <div className='container'>
      <form  className='mb-3'>
        <div  className='w-full flex gap-3 justify-center items-center '>
            <input type="text"  placeholder='Name*' className='card m-2 w-[50%] bg-gray-400/8 p-2 rounded-md'/>
            <input type="text"  placeholder='Email**' className='card m-2 w-[50%] bg-gray-400/8 p-2 rounded-md'/>
        </div>
        <div className='w-full flex gap-3 justify-center items-center'>
            <input type="text"  placeholder='phone' className=' card m-2 w-[50%] bg-gray-400/8 p-2 rounded-md'/>
            <input type="text"  placeholder='subject' className='card  m-2 w-[50%] bg-gray-400/8 p-2 rounded-md'/>
        </div>
       <textarea name="" id="" className=' card w-[98.3%] text-gray-300 h-32 m-2  bg-gray-400/8 p-2 rounded-md'>Mssage</textarea> 
                 <button className='card  ml-3 text-xs p-2 rounded-xl bg-white'>Send Message</button>

       </form>
       </div>
 
    </div>
  )
}

export default Contact
