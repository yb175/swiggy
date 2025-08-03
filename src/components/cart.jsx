import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.cartItems);

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
        <div className="text-xl font-semibold text-green-600">
          Cart has {cartItems.length} item(s)! 🎉
        </div>
      )}
    </div>
  );
}