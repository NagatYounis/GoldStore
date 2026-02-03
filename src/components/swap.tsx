// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import imge1 from  '../assets/pexels-say-straight-1400349-2735981.jpg'
import image2 from '../assets/pexels-shish-jewels-1097890791-32501477.jpg'
import image3 from '../assets/pexels-the-glorious-studio-3584518-15491852.jpg'
export default function Swap() {
  //const [hover , sethover] = useState(true);
  return (
   <div className="max-w-6xl mx-auto px-4">
  <Swiper
    slidesPerView={3}
    spaceBetween={24}
    freeMode
    pagination={{ clickable: true }}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
  >
   

    {[ {
      imag: image3,
      title: "RINGS"

    },
    
    {
      imag: image2,
      title: "BRACELET"

    },
    {
      imag: imge1,
      title: "BRACELET"

    },
    {
      imag: image2,
      title: "NECKLECK"

    },].map((item) => (
      <SwiperSlide >
        <div className={`group cursor-pointer relative h-48 bg-white rounded-xl shadow  text-black flex justify-center items-center`}>
      <img src={item.imag} alt=""  className='w-full h-full object-cover relative z-3'/>
<div className='absolute w-full opacity-0 group-hover:opacity-35 h-full bg-black/35 z-10 '></div>
    <span className='absolute text-3xl top-10 left-2 text-white z-20 '>{item.title}</span>
        </div>
      </SwiperSlide>
    ))}
    
  </Swiper>
</div>
  );
}

