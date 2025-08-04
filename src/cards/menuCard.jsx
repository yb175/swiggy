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
      className="flex items-center justify-between p-2 border-b border-gray-200"
    >
      
      <div className="w-[70%] flex flex-col">
        <h3 className="text-lg font-medium">{menuItem.name}</h3>
        <p className="text-sm text-gray-600 font-semibold">
          {menuItem.description}
        </p>
        <span className="text-sm text-gray-500">
          ₹{(menuItem.price || menuItem.defaultPrice) / 100}
        </span>
      </div>
      <div className="w-[30%] flex justify-end flex-col items-center gap-4">
        <img
          src={
            menuItem.imageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menuItem.imageId}`
              : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg"
          }
          alt={menuItem.name}
          className="w-25 h-25 rounded-md object-cover"
        />
        {cnt === 0 ? (
          <button
            onClick={() => {
              if (restId === null) {
                dispatch(addToCart(menuItem));
              } else {
                
                dispatch(clearCart(menuItem));
              }
            }}
            className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white font-semibold px-6 py-2 rounded-full shadow-md"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center space-x-4 bg-white border border-gray-300 rounded-full px-4 py-1 shadow-md">
            <button
              onClick={() => {
                dispatch(decreamentQty(menuItem.id));
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-8 h-8 rounded-full text-center leading-8 shadow"
            >
              −
            </button>
            <span className="font-medium text-gray-700">{cnt}</span>
            <button
              onClick={() => {
                dispatch(increamentQty(menuItem.id));
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-8 h-8 rounded-full text-center leading-8 shadow"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
