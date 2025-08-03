import MenuDisplay from "./menuDisplay";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";
import { Search } from "lucide-react";

export default function MenuItems({ menuItems }) {
  const navigate = useNavigate();
  const [doSearch, setdoSearch] = useState(false);
  console.log(`is menuItems arr : ${Array.isArray(menuItems)}`);
  const [selectedOption, setSelectedOption] = useState(null);
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
  const allData = {};

  menuItems?.forEach((item) => {
    const cards = item?.itemCards || item?.carousel?.items || [];

    cards?.forEach((card) => {
      const info = card?.card?.info;
      if (info?.id) {
        allData[info.id] = info;
      }
    });
  });
  const menuData = Object.values(allData);
  console.log(menuData);
  function handleSelected(option) {
    if (selectedOption === option) {
      setSelectedOption(null);
    }
    if (option === "veg") {
      setSelectedOption("veg");
    }
    if (option === "non-veg") {
      setSelectedOption("non-veg");
    }
  }
  if(doSearch){
    return(
      <div className="w-[70%] bg-white shadow-md rounded-3xl p-6 flex flex-col gap-3 border border-gray-200">
        <div className=" w-[100%] mx-auto mt-4 relative flex justify-center align-center">
          <Outlet />
        </div>
      </div>
    )
  }
  return (
    <div className="w-[70%] bg-white shadow-md rounded-3xl p-6 flex flex-col gap-3 border border-gray-200">
      <div className="w-full max-w-md mx-auto mt-4 relative">
        <button
          onClick={() =>{
            navigate(`/menu/${menuData[0].parentId}/search`, {
              state: { menuData: menuData },
            })
            setdoSearch(true) ; 
          }}
          className="w-full px-5 py-3 pr-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm transition duration-200 placeholder:text-gray-400"
        >
          {" "}
          Search for dishes or restaurants...
        </button>
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500 transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m1.85-4.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
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
          <MenuDisplay key={index} item={item} foodSelected={selectedOption} />
        );
      })}
    </div>
  );
}
