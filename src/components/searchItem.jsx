import MenuCard from "../cards/menuCard";
import { useLocation } from "react-router";
import { useState } from "react";
export default function SearchedItems() {
    const location = useLocation();
     const menuData = location.state?.menuData || [];
    const [searchQuery, setSearchQuery] = useState("");
    const filteredData = menuData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="w-[70%] bg-white shadow-md rounded-3xl p-6 flex flex-col gap-3 border border-gray-200">
            <div className="w-full max-w-md mx-auto mt-4 relative">
                <input
                    type="text"
                    placeholder="Search for dishes or restaurants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-3 pr-12 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm transition duration-200 placeholder:text-gray-400"
                />
            </div>
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                    <MenuCard key={item.id} menuItem={item} />
                ))
            ) : (
                <h1 className="text-2xl font-bold">No Results Found</h1>
            )}
        </div>
    );
}