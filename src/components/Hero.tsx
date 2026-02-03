import { Link } from "react-router"
import vedio from "../assets/13402255_2160_3840_30fps.mp4"
const Hero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden st">

  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src={vedio} type="video/mp4" />
  </video>

 
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h1 className="text-5xl md:text-6xl font-bold text-white">
      IRAM Where Luxury Meets Your Choice
    </h1>
    <p className="mt-4  text-white text-lg md:text-xl">
      Discover our exclusive jewelry collection
    </p>
  <Link to="/shop">
    <button className=" h-15 mt-6 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-transparent hover:text-white hover:border-2 hover:border-amber-100 transition">
      Shop Now
    </button>
  
  </Link>
  </div>
</div>

  )
}
export default Hero
