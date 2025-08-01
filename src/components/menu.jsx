import { useParams } from "react-router";
import { useState, useEffect, useRef } from "react";
import Spinner from "../uiComponents/spinners/spinner";
import { Star } from "lucide-react";
import OfferCard from "../cards/offerCard";
import MenuItems from "../cards/menuItems";

import { scrollLeft, scrollRight } from "../uiComponents/scroll";
export default function Menu() {
  let params = useParams();
  const menuRef = useRef(null);
  const [restInfo, setRestInfo] = useState({});
  useEffect(() => {
    async function fetchMenu() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const resturant = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.69892&lng=77.1607391&restaurantId=${params.id}&submitAction=ENTER`;
      const response = await fetch(proxyServer + resturant);
      const data = await response.json();
      console.log(data);
      console.log(
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
      );
      setRestInfo(data);
    }
    fetchMenu();
  }, []);
  const menuData =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  console.log(menuData);
  const menuItems = menuData
    .map((item) => item.card?.card)
    .filter((card) => card?.itemCards || card?.carousel);
  console.log(menuItems);
  const { avgRatingString, totalRatingsString, areaName } =
    restInfo?.data?.cards[2]?.card?.card?.info || {};
  const cuisines = restInfo?.data?.cards[2]?.card?.card?.info.cuisines || [];
  const deliveryTime =
    restInfo?.data?.cards[2]?.card?.card?.info?.sla?.deliveryTime || 0;
  if (!restInfo?.data) return <Spinner />;

  const offers =
    restInfo.data.cards[3].card.card.gridElements.infoWithStyle.offers;
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-3">
      <div className="w-[70%] flex flex-col items-start justify-centeralign-center mt-40">
        <h1 className="text-3xl font-bold">
          {restInfo?.data?.cards[0]?.card?.card?.text}
        </h1>
      </div>
      <div className="w-[70%] bg-white shadow-md rounded-3xl p-6 flex flex-col gap-3 border border-gray-200">
        {/* Ratings & Cost */}
        <div className="flex items-center text-base font-semibold text-gray-800">
          <Star className="w-5 h-5 text-green-500 mr-1 fill-green-500" />
          <span className="mr-2">{avgRatingString}</span>
          <span className="text-sm font-normal text-gray-600">
            ({totalRatingsString}) • ₹250 for two
          </span>
        </div>

        {/* Cuisines */}
        <div className="text-orange-500 underline text-sm font-semibold space-x-1">
          {cuisines.map((cuisine, index) => (
            <span key={index}>
              {cuisine}
              {index !== cuisines.length - 1 && ","}
            </span>
          ))}
        </div>

        {/* Area */}
        <div className="flex items-center text-sm text-gray-600 font-semibold">
          <span className="mr-1">Outlet</span>
          <span className="text-gray-500">{areaName}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-1 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Delivery Time */}
        <div className="text-base font-semibold text-gray-800">
          {deliveryTime}-40 mins
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-4 mt-10">
        {/* Left Button */}
        <button
          onClick={() => scrollLeft(menuRef)}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md transition"
          aria-label="Scroll Left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scrollable Offer List */}
        <div
          ref={menuRef}
          className="w-[70%] grid grid-flow-col auto-cols-max overflow-x-auto gap-4 px-2 scrollbar-hide scroll-smooth"
        >
          {offers.map((offer) => (
            <OfferCard key={offer.info.offerIds[0]} offer={offer.info} />
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scrollRight(menuRef)}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md transition"
          aria-label="Scroll Right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <MenuItems menuItems={menuItems}></MenuItems>
    </div>
  );
}
