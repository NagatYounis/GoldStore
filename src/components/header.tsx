import logo from '../assets/iram-logo.png'

import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../context/auth';
import { useCart } from '../context/cartcontext';
import CartItems from './CartItems';
 type ScrollingProp={
  ScrollTOElement: ()=> void;
 }
const Header = ({ScrollTOElement} : ScrollingProp) => {
  const {items} = useCart();
    const [clicked ,setClicked] = useState(false);
  const {token, logout} = useAuth();

  return (
<div className='main w-full h-40  py-1 px-3 flex flex-col  gap-3 justify-center items-center text-white'>
   {/*cart design */}
<div
      className={`
        fixed top-0 right-0 h-screen w-[33%] bg-[#333] z-50
        overflow-y-auto
        transition-all duration-500 ease-in-out 
        transform
        ${clicked ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
        p-12 flex flex-col items-center
      `}
    >
      <span
        className="text-white text-3xl absolute right-5 top-5 cursor-pointer"
        onClick={() => setClicked(false)}
      >
        <IoIosCloseCircleOutline />
      </span>

    { items.length > 0  ? <CartItems/> : <h2 className="mt-20">Your Cart is Empty</h2> }
    </div>

 

    {/* cart end design */}

<div className='flex justify-between w-full items-ceter md:w-[80%] mx-auto'>
    <div className='flex justify-center items-center flex-col'>
{token ? <h1 className='absolute right-50 md:right-4 top-1 text-gray-300/74  '>welcome {token}</h1>: ' '}
<Link to="/" > <img className='object-cover' src={logo} alt="logo" width={150} height={30}/>
</Link>
<span className='text-xs'>IRAM JEWELLRY</span>
</div>
<div className="flex gap-2 items-center">
{token ? <span className='text-xs cursor-pointer' onClick={()=>logout()}>sign out</span> : <Link to="/login"><span className='cursor-pointer transition-all hover:scale-110 hover:text-gray-600 text-xl'>  <FaRegUserCircle />
</span> </Link>}
<div className='relative w-7'>
  <span onClick={()=>setClicked(!clicked)} className='cursor-pointer transition-all hover:scale-110 hover:text-gray-600 text-xl'><FaCartShopping />
</span>
 <span className='absolute -top-7  -right-2 px-[0.6rem] py-[0.1rem]  bg-red-400 rounded-full'>{items.length}</span> 
</div>


</div>
</div>

<div>
    <ul className='flex justify-between items-center  flex-wrap gap-6 md:gap-12 text-[15px]'>
    <li onClick={ScrollTOElement} className='cursor-pointer text-xs relative group'>IRAM WORLD <span className='absolute bg-white w-[0%] h-[0.2rem] rounded-md left-0 top-[100%] transition-all group-hover:w-full'></span></li>
    <li className='cursor-pointer text-xs  relative group' >IRAM CATALOG <span className='absolute bg-white w-[0%] h-[0.2rem] rounded-md left-0 top-[100%] transition-all group-hover:w-full'></span></li>
  
    <li className='cursor-pointer text-xs relative group'>IRAM LIMITED EDITION CREATIONS<span className='absolute bg-white w-[0%] h-[0.2rem] rounded-md left-0 top-[100%] transition-all group-hover:w-full'></span></li>
    <li className='text-xl text-gray-500/99 cursor-pointer md:text-xs relative group'>LOCATION <span className='absolute bg-white w-[0%] h-[0.2rem] rounded-md left-0 top-[100%] transition-all group-hover:w-full'></span></li>
    <li className='text-xl text-gray-500/99 cursor-pointer md:text-xs relative group'>CONTACT US <span className='absolute bg-white w-[0%] h-[0.2rem] rounded-md left-0 top-[100%] transition-all group-hover:w-full'></span></li>
</ul>
</div>
    </div>
    
  )
}

export default Header

