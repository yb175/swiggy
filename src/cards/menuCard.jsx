import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  addToCart,
  increamentQty,
  decreamentQty,
  clearCart,
} from "../slice/slice2";

export default function MenuCard({ menuItem }) {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const restId = useSelector((store) => store.cart.restId);
  const dispatch = useDispatch();
  const cnt = cartItems.find((item) => item.id === menuItem.id)?.qty || 0;

  return (
    <div
      key={menuItem.id}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-3 border-b border-gray-200 gap-2 sm:gap-0"
    >
      {/* Left side - Text content */}
      <div className="w-full sm:w-[70%] flex flex-col">
        <h3 className="text-base sm:text-lg font-medium">{menuItem.name}</h3>
        <p className="text-xs sm:text-sm text-gray-600 font-semibold line-clamp-2">
          {menuItem.description}
        </p>
        <span className="text-sm sm:text-base text-gray-500 mt-1">
          ₹{(menuItem.price || menuItem.defaultPrice) / 100}
        </span>
      </div>

      {/* Right side - Image and buttons */}
      <div className="w-full sm:w-[30%] flex flex-row sm:flex-col justify-between sm:justify-end items-center gap-2 sm:gap-3">
        {/* Image - hidden on mobile if no imageId */}
        {menuItem.imageId && (
          <img
            src={
              menuItem.imageId
                ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menuItem.imageId}`
                : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg"
            }
            alt={menuItem.name}
            className="hidden sm:block w-20 h-20 sm:w-24 sm:h-24 rounded-md object-cover"
          />
        )}

        {/* Add/Quantity controls */}
        {cnt === 0 ? (
          <button
            onClick={() => {
              if (restId === null) {
                dispatch(addToCart(menuItem));
              } else {
                dispatch(clearCart(menuItem));
              }
            }}
            className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white font-semibold px-4 py-1 sm:px-6 sm:py-2 rounded-full shadow-md text-sm sm:text-base w-16 sm:w-auto"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center space-x-2 sm:space-x-4 bg-white border border-gray-300 rounded-full px-2 sm:px-4 py-1 shadow-md">
            <button
              onClick={() => {
                dispatch(decreamentQty(menuItem.id));
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full text-center leading-6 sm:leading-8 shadow text-sm sm:text-base"
            >
              −
            </button>
            <span className="font-medium text-gray-700 text-sm sm:text-base">{cnt}</span>
            <button
              onClick={() => {
                dispatch(increamentQty(menuItem.id));
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full text-center leading-6 sm:leading-8 shadow text-sm sm:text-base"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}