import Hero from '../components/Hero';
import Explore from '../components/Explore';
import About from '../components/About';
import Products from '../components/Products';
import Payment from '../components/payment';
import Collection from '../components/collection';
import Contact from '../components/contact';
import Header from '../components/header';
import { useRef } from 'react';
//import GetProducts from '../components/GetPro';

const Home = () => {
  const Elementscoll = useRef<HTMLDivElement | null>(null);
  const ScrollTOElement =()=>{
    Elementscoll.current?.scrollIntoView({behavior: "smooth"})
  }
  return (
    <div>
          <Header ScrollTOElement={ScrollTOElement}/>
      <Hero/>
    <Explore/>
    <About/>
    <Products/>
    <Payment/>
 <div ref={Elementscoll}>
     <Collection/>
 </div>
    <Contact/>
    {/* <GetProducts/> */}
    </div>
  )
}

export default Home
