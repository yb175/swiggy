import { useSelector } from "react-redux";
import { useState } from "react";
import {
  ShoppingCart,
  IndianRupee,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
export default function Cart() {
  const cartItems = useSelector((store) => store.cart.cartItems);
  let bill = 0;
  cartItems.map(
    (item) =>
      (bill += item?.qty * item?.price/100 || item?.defaultPrice/100 * item?.qty)
  );
  console.log(cartItems);
  return (
    <div className="flex items-center justify-center min-h-[60vh] mt-10">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br from-orange-100 via-white to-orange-200 rounded-3xl shadow-2xl animate-fadeIn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-32 h-32 mb-6 animate-bounce"
          />
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Oh No! 🛒</h2>
          <p className="text-lg text-gray-700 mb-6">
            Your cart is crying...
            <br />
            Add something delicious to make it smile! 🥹
          </p>
          <button
            onClick={() => console.log("Take user to menu")}
            className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-transform duration-300 hover:scale-105 shadow-md"
          >
            Browse Menu 🔥
          </button>
          <p className="mt-4 text-sm text-gray-500 animate-pulse">
            Hot samosas, chilled drinks... they're waiting for you! 🤤
          </p>
        </div>
      ) : (
        <div className="w-full max-w-3xl p-6 bg-white shadow-xl rounded-3xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShoppingCart className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-orange-600">
              Your Cart Summary
            </h2>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition duration-200"
              >
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-gray-800">
                    {item?.name}
                  </p>
                  <p className="text-sm text-gray-600">Qty: {item?.qty}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-700 flex items-center gap-1">
                    <IndianRupee className="w-4 h-4" />
                    {(item?.price/100 || item?.defaultPrice/100) * item?.qty}
                  </p>
                  <p className="text-sm text-gray-500">
                    ₹{item?.price/100 || item?.defaultPrice/100} each
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-700 flex items-center gap-2">
              <IndianRupee className="w-6 h-6 text-gray-700" />
              Total:
            </h3>
            <span className="text-3xl font-extrabold text-orange-600 flex items-center gap-1">
              <IndianRupee className="w-6 h-6" />
              {bill}
            </span>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-transform duration-300 hover:scale-105 shadow-md flex items-center gap-2">
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
