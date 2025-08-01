import MenuDisplay from "./menuDisplay";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
export default function MenuItems({ menuItems }) {
  console.log(menuItems[0]?.title);
  console.log(menuItems[1]?.itemCards);
  console.log(menuItems);
  const [open, setOpen] = useState(true);
  if (!menuItems || menuItems.length === 0) {
    return (
      <div
        className="w-[70%] bg-white shadow-md rounded-3
xl p-6 flex flex-col gap-3 border border-gray-200"
      >
        <h1 className="text-2xl font-bold">No Menu Items Available</h1>
      </div>
    );
  }
  return (
    <div className="w-[70%] bg-white shadow-md rounded-3xl p-6 flex flex-col gap-3 border border-gray-200">
      {menuItems?.map((item, index) => {
        return (
            <MenuDisplay
              key={index}
              item={item}
            />
        );
      })}
      
    </div>
  );
}
