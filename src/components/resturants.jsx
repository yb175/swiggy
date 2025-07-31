import { useState, useEffect, use } from "react";
import RestCard from "../cards/restCard";
import Shimmar from "../cards/shimmer";
import { restData } from "../slice/slice1";
import { useDispatch, useSelector } from "react-redux";

export default function Restaurants() {
  // Redux state ko directly access karo
  const restaurantsData = useSelector((store) => store.resturants.restInfo);
  const loading = useSelector((store) => store.resturants.loading);
  const error = useSelector((store) => store.resturants.error);
  console.log(restaurantsData);
  console.log(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (restaurantsData.length === 0) {
      dispatch(restData());
    }
  }, []);
  if (loading) {
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
          {restaurantsData.map((restaurant) => (
            <RestCard key={restaurant.info.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}
