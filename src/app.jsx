import ImageGridCards from "../assets/imageGridCards";
import { useRef } from "react";
export default function App() {
  const scrollRef = useRef(null);
  const leftScroll =()=>{
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    
  }
  const rightScroll =()=>{
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  }
  return (
    // Header Part 
    <>
    <div className="bg-[#ff5200] flex flex-col items-center justify-center gap-4 md:gap-8 p-4 md:p-5">
      <div className=" p-2 md:p-0 flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
        alt="logo"
        className="w-32 h-10 md:w-40 md:h-12"
      />

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <a
          href="https://www.swiggy.com/corporate/"
          target="_blank"
          className="text-white font-bold text-lg md:text-2xl text-center"
        >
          Swiggy Corporate
        </a>
        <a
          href="https://www.swiggy.com/corporate/"
          target="_blank"
          className="text-white font-bold text-lg md:text-2xl text-center"
        >
          Partner with us
        </a>
        <a
          href="https://www.swiggy.com/corporate/"
          target="_blank"
          className="text-white font-bold text-md md:text-xl border-2 border-white rounded-2xl px-5 py-2 text-center"
        >
          Get the App
        </a>
        <a
          href="https://www.swiggy.com/corporate/"
          target="_blank"
          className="text-white font-bold text-md md:text-xl border-2 border-black bg-black rounded-2xl px-5 py-2 text-center"
        >
          Login
        </a>
        </div>
      </div>
      <h1 className="text-white font-bold text-4xl w-[60%] text-center">Order food & groceries. Discover best restaurants. Swiggy it!</h1>
      <img 
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
      alt="veggies"
      className="w-[250px] h-[500px] absolute left-0 "
      ></img>
      <img 
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
      className="w-[250px] h-[500px] absolute right-0 "
      ></img>
      <div className="flex flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-10">
      <select className="text-black font-medium text-3xl w-[60%] text-center bg-white outline-0 rounded h-15" name="location">
        <option value="bangalore" >bangalore</option>
        <option value="delhi">delhi</option>
        <option value="mumbai">mumbai</option>
      </select>
      <input type="text" className="text-black font-medium text-3xl w-[100%] text-center bg-white outline-0 rounded h-15" placeholder="Search for Restaurants" />
      </div>
      <div className="flex flex-row items-center justify-center  gap-4 md:gap-8 p-4 md:p-10">
          <a>
            <img 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"  
            alt="veggies"
            className="w-[326px] h-[300px]"
            />
          </a>
           <a>
            <img 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"  
            alt="veggies"
            className="w-[326px] h-[300px]"
            />
          </a>
           <a>
            <img 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"  
            alt="veggies"
            className="w-[326px] h-[300px]"
            />
          </a>
      </div>
    </div>
    <div className="flex flex-wrap  items-center justify-center w-full">
      <button
        onClick={leftScroll}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
      >
        ←
      </button>
      <div className="w-[60%] h-[20%] overflow-x-scroll scrollbar-hide" ref={scrollRef}>
         
        <div 
          className="grid grid-rows-2 auto-cols-max gap-4 grid-flow-col"
          style={{ width: 'max-content' }}
        >
          {
            ImageGridCards.map((item)=>{
              return (
                <a key={item.id}>
                  <img
                    src= {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`}

                    alt="veggies"
                    className="w-[144px] h-[180px]"
                  >
                  </img>
                </a>
              )
            })
          }
          </div>
        </div>
        <button
          onClick={rightScroll}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
        >
          →
        </button> 
    </div>
    </>
  );
}
