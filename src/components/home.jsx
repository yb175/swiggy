import ImageGridCards from "../../assets/imageGridCards.js";
import { useRef } from "react";
import grocery from "../../assets/grocery.js";
import restaurants from "../../assets/dineData.js";
import DineCards from "../cards/dineCards.jsx";
import { scrollLeft, scrollRight } from "../uiComponents/scroll.js";
import { Link } from "react-router";

export default function Home() {
  const scrollRef = useRef(null);
  const groceryRef = useRef(null);
  
  return (
    <>
      <div className="bg-[#ff5200] flex flex-col items-center justify-center gap-2 md:gap-8 p-2 md:p-5 relative overflow-hidden">
        {/* Background images - hidden on mobile */}
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="veggies"
          className="hidden md:block w-[150px] md:w-[250px] h-[300px] md:h-[500px] absolute left-0"
        />
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="sushi"
          className="hidden md:block w-[150px] md:w-[250px] h-[300px] md:h-[500px] absolute right-0"
        />

        <div className="p-1 md:p-2 flex flex-col md:flex-row items-center justify-between w-full gap-2 md:gap-0 max-w-7xl mx-auto">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="logo"
            className="w-24 h-8 md:w-40 md:h-12"
          />

          <div className="flex flex-wrap justify-center gap-2 md:gap-8 items-center">
            <a className="text-white font-bold text-sm md:text-2xl text-center">
              Swiggy Corporate
            </a>
            <a
              href="https://www.swiggy.com/corporate/"
              target="_blank"
              className="text-white font-bold text-sm md:text-2xl text-center"
            >
              Partner with us
            </a>
            <a
              href="https://www.swiggy.com/corporate/"
              target="_blank"
              className="text-white font-bold text-xs md:text-xl border-2 border-white rounded-2xl px-2 py-1 md:px-5 md:py-2 text-center"
            >
              Get the App
            </a>
            <a
              href="https://www.swiggy.com/corporate/"
              target="_blank"
              className="text-white font-bold text-xs md:text-xl border-2 border-black bg-black rounded-2xl px-2 py-1 md:px-5 md:py-2 text-center"
            >
              Login
            </a>
          </div>
        </div>
        
        <h1 className="text-white font-bold text-xl md:text-4xl w-full md:w-[60%] text-center px-2">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </h1>

        <div className="flex flex-col items-center gap-2 md:gap-4 w-full px-2 md:px-4 py-3 md:py-6 rounded-xl max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 w-full">
            <select
              name="location"
              className="text-black font-medium text-base md:text-3xl text-center bg-white outline-none rounded h-10 md:h-15 px-2 md:px-4 py-1 md:py-2 w-full md:w-[250px] border border-gray-300 shadow-sm"
            >
              <option value="bangalore">Bangalore</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>

            <input
              type="text"
              placeholder="Search for Restaurants"
              className="text-black font-medium text-base md:text-3xl text-center bg-white outline-none rounded h-10 md:h-15 px-2 md:px-4 py-1 md:py-2 w-full md:w-[500px] border border-gray-300 shadow-sm"
            />
          </div>
        </div>
        
        {/* Centered Services Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-2 md:p-10 w-full max-w-7xl mx-auto">
          <Link to="/secondaryHome/resturants" className="flex justify-center w-full md:w-auto">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
              alt="food"
              className="w-full max-w-[326px] h-auto md:h-[300px] object-cover rounded-lg"
            />
          </Link>
          <Link to="/secondaryHome/resturants" className="flex justify-center w-full md:w-auto">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
              alt="instamart"
              className="w-full max-w-[326px] h-auto md:h-[300px] object-cover rounded-lg"
            />
          </Link>
          <Link className="flex justify-center w-full md:w-auto">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
              alt="dineout"
              className="w-full max-w-[326px] h-auto md:h-[300px] object-cover rounded-lg"
            />
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center w-full px-2 md:px-0 max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-center mt-4">
          Popular Categories
        </h1>
        <div className="flex items-center justify-center gap-2 md:gap-4 my-2 md:my-4 w-full">
          <button
            onClick={() => scrollLeft(scrollRef)}
            className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full w-8 h-8 md:w-10 md:h-10 items-center justify-center shadow-md transition"
          >
            ←
          </button>
          <div
            className="w-full md:w-[80%] overflow-x-scroll scrollbar-hide px-2"
            ref={scrollRef}
          >
            <div
              className="flex gap-2 md:gap-4 scrollbar-hide"
              style={{ width: "max-content" }}
            >
              {ImageGridCards.slice(0, 8).map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`}
                    alt="category"
                    className="w-20 h-20 md:w-[144px] md:h-[180px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => scrollRight(scrollRef)}
            className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full w-8 h-8 md:w-10 md:h-10 items-center justify-center shadow-md transition"
          >
            →
          </button>
        </div>

        {/* Grocery Section */}
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-xl md:text-2xl font-bold text-center mt-2 md:mt-4">
            Shop Groceries on Instamart
          </h1>
          <div className="flex items-center justify-center gap-2 md:gap-4 my-2 md:my-4 w-full align-center">
            <button
              onClick={() => scrollLeft(groceryRef)}
              className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full w-8 h-8 md:w-10 md:h-10 items-center justify-center shadow-md transition"
            >
              ←
            </button>
            <div
              className="w-full md:w-[80%] overflow-x-scroll scrollbar-hide px-2"
              ref={groceryRef}
            >
              <div className="flex gap-2 md:gap-4 justify-center align-center" style={{ width: "max-content" }}>
                {grocery.slice(0, 5).map((item) => (
                  <div key={item.id} className="flex flex-col items-center">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`}
                      className="w-20 h-20 md:w-[144px] md:h-[180px] object-cover rounded-lg"
                      alt="grocery item"
                    />
                    <h2 className="text-xs md:text-base text-center mt-2">{item.action.text}</h2>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => scrollRight(groceryRef)}
              className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full w-8 h-8 md:w-10 md:h-10 items-center justify-center shadow-md transition"
            >
              →
            </button>
          </div>
        </div>
        
        {/* Restaurants Section */}
        <h2 className="text-xl md:text-2xl font-bold text-center mt-2 md:mt-4">
          Discover best restaurants on Dineout
        </h2>
        <div className="flex justify-center overflow-x-scroll scrollbar-hide w-full px-2 md:px-4 py-2 md:py-4 gap-2 md:gap-4">
          <div className="flex gap-2 md:gap-4">
            {restaurants.slice(0, 4).map((item) => (
              <DineCards 
                key={item.info.id} 
                dineData={item} 
                className="min-w-[200px] md:min-w-[300px]"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}