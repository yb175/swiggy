import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
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
          <button className="flex items-center gap-1 hover:text-orange-500" >
            <ShoppingCart className="w-5 h-5" />
            Cart(0) 
          </button>
        </nav>

        {/* Mobile: Only Cart */}
        <div className="md:hidden">
          <ShoppingCart className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    </header>
  );
}
