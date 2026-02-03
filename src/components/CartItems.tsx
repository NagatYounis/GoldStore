import { useNavigate } from "react-router";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cartcontext";
const CartItems = () => {
  const { items } = useCart();
  const {token} = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>{items.length} items in cart</h1>
      {items.map((item, index) => (
        <div className="flex  justify-center items-center gap-5">
          <img
            src={item.img}
            alt=""
            className="object-cover my-5  rounded-md"
            style={{ width: "100px", height: "70px" }}
          />
          <p className="text-yellow-200/75">{Number(index) + 12 * 300} $ </p>
        </div>
      ))}
      {token? <button className="p-2 bg-green-500 rounded-2xl text-xs ml-8">Checkout</button> : <span onClick={()=>navigate("/login")} className="cursor-pointer ml-15 bg-white text-gray-600 p-1 rounded-md ">Sign In first </span>}
    </div>
  );
};

export default CartItems;
