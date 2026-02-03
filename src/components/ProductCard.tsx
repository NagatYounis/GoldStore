import { useState } from "react";
import { FaCartShopping, FaHeart, FaMagnifyingGlass } from "react-icons/fa6";
import { useCart } from "../context/cartcontext";
import { toast } from "react-toastify";

type ProductCardProps = {
  img: string;
id:number
};
const ProductCard:React.FC<ProductCardProps>  = ({ img , id} : ProductCardProps) => {

 const {increaseQuantity}= useCart();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="card w-50 h-80 rounded-md relative z-10 group   mt-7">
     {hovered ?      <div className="absolute bg-green-800 text-xs text-white -right-3  -top-3 p-[0.3rem] z-600"> In cart</div>
 : " "}
      <img src={img} alt="" className="w-50 h-70 object-cover rounded-md" />

      <span
        onClick={() => setClicked(!clicked)}
        className={`absolute cursor-pointer ${
        clicked ? "text-red-400" : "text-white"
        } transition-all opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-110 right-3 bottom-[70%]`}
      >
        <FaHeart />
      </span>

      <span className="absolute cursor-pointer text-white transition-all opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-110 right-3 bottom-[50%]">
        <FaMagnifyingGlass />
      </span>

      <button onClick={()=>{increaseQuantity(id , img); setHovered(true);    toast.success("Added to cart 🛒", {
      toastId: id,
    });}}
    
        
        className="text-xs rounded-xl bg-white p-3 absolute bottom-25 left-9 z-20 w-30 flex justify-center items-center"
 >
        {hovered ? <span className="text-xl text-green-600"><FaCartShopping /> </span>: "Add Cart"}
      </button>
      {/* <p>{Number(Math.round(price.toFixed(2))) }</p> */}
    </div>
  );
};
export default ProductCard;
    // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}