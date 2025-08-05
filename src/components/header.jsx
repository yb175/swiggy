import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link }  from "react-router";
export default function Header() {
  const cnt = useSelector((store) => store.cart.cnt);
  return (
    <header className="bg-white shadow-md fixed top-0 z-50 w-full ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          Swiggy
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700 text-sm font-medium">
          <button className="hover:text-orange-500">Search</button>
          <button className="hover:text-orange-500">Offers</button>
          <button className="hover:text-orange-500">Help</button>
          <button className="hover:text-orange-500">Sign In</button>

          {/* Cart Icon (no count) */}
          <Link to="/secondaryHome/cart">
          <button className="flex items-center gap-1 hover:text-orange-500" >
            <ShoppingCart className="w-5 h-5" />
            Cart({cnt}) 
          </button>
          </Link>
        </nav>

        {/* Mobile: Only Cart */}
        <div className="md:hidden">
          <ShoppingCart className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    </header>
  );
}
