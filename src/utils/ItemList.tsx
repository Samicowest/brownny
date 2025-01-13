import React from "react";
import { FaHeart, FaSearch, FaShoppingBasket } from "react-icons/fa";
import Img1 from "@/assets/product1.png";
import Img2 from "@/assets/product2.png";
import Img3 from "@/assets/product3.png";
import Img4 from "@/assets/product4.png";
import Img5 from "@/assets/product5.png";
import Img6 from "@/assets/product6.png";
import Img7 from "@/assets/product7.png";
import Img8 from "@/assets/product8.png";

const ItemList: React.FC = () => {
  const items = [
    { id: 1, image: Img1 },
    { id: 2, image: Img2 },
    { id: 3, image: Img3 },
    { id: 4, image: Img4 },
    { id: 5, image: Img5 },
    { id: 6, image: Img6 },
    { id: 7, image: Img7 },
    { id: 8, image: Img8 },
    // Add more items as needed
  ];

  return (
    <div className="bg-pinkLight py-14">
      <div className="text-3xl md:text-4xl font-bold font-kanit py-8 text-center">
        BEST SELLERS
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {items.map((item) => (
          <div key={item.id} className="relative group cursor-pointer">
            <img
              src={item.image}
              alt={`Product ${item.id}`}
              className="w-full h-[80%] object-cover"
            />
            <div className="p-2 text-center">
              <p className="text-md">Benefit of Skin care fo oil skin</p>
              <h2 className="text-xl font-bold font-kanit">$116.0 - $118.0</h2>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-around items-center transition-opacity duration-300">
              <button className="text-white">
                <FaHeart size={24} />
              </button>
              <button className="text-white">
                <FaSearch size={24} />
              </button>
              <button className="text-white">
                <FaShoppingBasket size={24} />
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full p-2 ">
              <div className="flex justify-between items-center">
                <button className="rounded-full p-1 bg-green-300 text-sm text-white">
                  Instock
                </button>
                <button className="rounded-full p-1 bg-red-300 text-sm text-white">
                  Sale
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
