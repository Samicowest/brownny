// /c:/Users/Samicowest/Pictures/shopping_store/src/utils/ItemsFilter.tsx

import React, { useState } from "react";

import Img1 from "@/assets/product1.png";
import Img2 from "@/assets/product2.png";
import Img3 from "@/assets/product3.png";

import { FaHeart, FaSearch, FaShoppingBasket } from "react-icons/fa";

const itemsData = [
  { id: 1, category: "Hair", name: "Laptop", image: Img1 },
  { id: 2, category: "Care Product", name: "T-Shirt", image: Img2 },
  { id: 3, category: "Hair", name: "Smartphone", image: Img3 },
  { id: 4, category: "Care Product", name: "Jeans", image: Img1 },
  { id: 5, category: "Hair", name: "Laptop", image: Img1 },
  { id: 6, category: "Care Product", name: "T-Shirt", image: Img2 },
  { id: 7, category: "Hair", name: "Smartphone", image: Img3 },
  { id: 8, category: "Care Product", name: "Jeans", image: Img1 },
  { id: 9, category: "Hair", name: "Laptop", image: Img1 },
  { id: 10, category: "Care Product", name: "T-Shirt", image: Img2 },
  { id: 11, category: "Hair", name: "Smartphone", image: Img3 },
  { id: 12, category: "Care Product", name: "Jeans", image: Img1 },
  { id: 13, category: "Hair", name: "Laptop", image: Img1 },
  { id: 14, category: "Care Product", name: "T-Shirt", image: Img2 },
  { id: 15, category: "Hair", name: "Smartphone", image: Img3 },
  { id: 16, category: "Care Product", name: "Jeans", image: Img1 },
];

const categories = ["All", "Care Product", "Hair"];

const ItemsFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? itemsData
      : itemsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="text-3xl md:text-4xl font-bold font-kanit py-8 text-center">
        LATEST PRODUCTS
      </div>
      <div className="flex space-x-8 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-2 py-1 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredItems.map((item) => (
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

export default ItemsFilter;
