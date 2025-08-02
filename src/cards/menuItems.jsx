import MenuDisplay from "./menuDisplay";
import { useState } from "react";
export default function MenuItems({ menuItems }) {
  console.log(menuItems[0]?.title);
  console.log(menuItems[1]?.itemCards);
  console.log(menuItems);
  const [selectedOption , setSelectedOption] = useState(null);
  if (!menuItems || menuItems.length === 0) {
    return (
      <div
        className="w-[70%] bg-white shadow-md rounded-3
xl p-6 flex flex-col gap-3 border border-gray-200"
      >
        <h1 className="text-2xl font-bold">No Menu Items Available</h1>
      </div>
    );
  }
  function handleSelected(option) {
    if(selectedOption === option){
      setSelectedOption(null);
    }
    if(option=== "veg"){
      setSelectedOption("veg");
    }
    if(option=== "non-veg"){
      setSelectedOption("non-veg");
    }
  }
  return (
    <div className="w-[70%] bg-white shadow-md rounded-3xl p-6 flex flex-col gap-3 border border-gray-200">
      <div className="flex gap-4 mt-4">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 
        ${
          selectedOption === "veg"
            ? "bg-green-100 text-green-700 border-green-500 shadow-md"
            : "text-gray-500 border-gray-300 hover:border-green-400 hover:text-green-600"
        }`}
        onClick={() => handleSelected("veg")}
      >
        🌱 Veg
      </button>

      <button
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 
        ${
          selectedOption === "non-veg"
            ? "bg-red-100 text-red-700 border-red-500 shadow-md"
            : "text-gray-500 border-gray-300 hover:border-red-400 hover:text-red-600"
        }`}
        onClick={() => handleSelected("non-veg")}
      >
        🍗 Non-Veg
      </button>
    </div>
      {menuItems?.map((item, index) => {
        return (
            <MenuDisplay
              key={index}
              item={item}
              foodSelected={selectedOption}
            />
        );
      })}
      
    </div>
  );
}
