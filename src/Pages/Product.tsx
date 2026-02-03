import vv from "../assets/pexels-the-glorious-studio-3584518-15491852.jpg";
import image2 from "../assets/pexels-shish-jewels-1097890791-32501477.jpg";
import img1 from "../assets/sapphire-ring-2119613_1280.jpg";
import { useState } from "react";

export type productShape={
  imge: string,
  id: string
}
const Product = () => {
  const images = [
    { imge: img1, id: "1" },
    { imge: image2, id: "2" },
    { imge: vv, id: "3" },
  ];
  const [image, seteImage] = useState(image2);
  function updateView(id: string) {
    const data = images.filter((item : productShape) => item.id == id);
    seteImage(data[0].imge);
    console.log(data);
  }
  return (
    <div className="w-full h-screen p-33">
      <div className=" w-full rounded-md relative z-10 group overflow-hidden  flex justify-start gap-10">
        <div>
          <img
            src={image}
            alt=""
            className="w-[300px] h-88   object-cover rounded-md "
          />
          <div className="flex gap-5 mt-3">
            {images.map((item) => (
              <img
                src={item.imge}
                onClick={() => updateView(item.id)}
                alt=""
                className="w-[70px] h-20   object-cover rounded-md "
              />
            ))}
          </div>
        </div>
        <div>
          <p className="w-85 ">
            Elegant diamond bracelet with brilliant-cut diamonds set in a sleek,
            polished design. Crafted for comfort and durability, it is suitable
            for daily wear or formal occasions, offering a timeless and
            luxurious finish.
          </p>

          <div className="mt-4">
            <div>
              {" "}
              <span className="mr-1">wight: </span>
              <span className=" font-extrabold"> 20.3 gram</span>
            </div>
            <div className="flex justify-start items-center">
              <span className="mr-1">Colors:</span>
              <div className="w-[20px] mr-3 h-[20px] bg-yellow-300 rounded-full"></div>
              <div className="w-[20px] h-[20px] bg-gray-300 rounded-full"></div>
            </div>{" "}
          </div>
          <div className="flex mt-2">
            <p className=" font-bold mr-2">style:</p><p>Elegent/ Classic</p>
          </div>
          <button className="text-xs mt-5 text-white rounded-xl cursor-pointer bg-[#222] p-3 ">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
