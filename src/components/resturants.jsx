import { useState, useEffect } from "react";
import RestCard from "../cards/restCard";
import Shimmar from "../cards/shimmer";
export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    async function fetchRestaurants() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.69892&lng=77.1607391";
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      console.log(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setRestaurants(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    }

    fetchRestaurants();
  }, []);
  if (restaurants.length === 0) {
    const shimmerArr = new Array(10).fill("");
    return (
      <div className="flex flex-row flex-wrap w-full justify-center items-center gap-4">
        {shimmerArr.map((_, index) => (
          <Shimmar key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="text-3xl font-bold">Best Resturants in Delhi</h1>
        <div className="flex flex-row flex-wrap w-full items-center justify-center">
          {restaurants.map((restaurant) => (
            <RestCard key={restaurant.info.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}
