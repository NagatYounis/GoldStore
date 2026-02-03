//goldStore66#@!
import img1 from "../assets/pexels-the-glorious-studio-3584518-15491852.jpg"
import imge1 from  '../assets/pexels-say-straight-1400349-2735981.jpg';
import image2 from '../assets/pexels-shish-jewels-1097890791-32501477.jpg';
import image3 from '../assets/sapphire-ring-2119613_1280.jpg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from './ProductCard';
gsap.registerPlugin(ScrollTrigger);
 export  const DataItems =[
  {
    photo: img1,
    id: 1
  },
  {
    photo: image2,
    id: 2
  },
  {
    photo: image3,
    id: 3
  },
  {
    photo: imge1,
    id: 4
  },
  {
    photo: img1,
    id: 5
  },
  {
    photo: image3,
    id: 6
  },
  {
    photo: image2,
    id: 7
  },

  {
    photo: imge1,
    id: 8
  }
]
const Products = () => {
    const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".card", {
        opacity: 0,            
        duration: 1,            
        stagger: 0.2,         
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",     
          toggleActions: "play none none none", 
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (

      <div className='w-full px-33 bg-[#333] lg:h-screen  st py-12'>
      <h2 className='text-white text-3xl text-center'>ADORNED JEWELS </h2>
  
  <div  ref={containerRef} className="cards   flex gap-5 justify-center items-center flex-wrap ">

{ DataItems.map((item )=>(
  <div>
   <ProductCard img={item.photo} id={item.id}/>
    </div>
))} 
 

  </div>
  </div>
  )
}

export default Products
