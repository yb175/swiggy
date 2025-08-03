import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import MenuCard from "./menuCard"; 
export default function MenuDisplay({ item, foodSelected, searchQuery }) {
  const [open, setOpen] = useState(true);
  if (foodSelected == "veg" ) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-[100%]">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <button onClick={() => setOpen(!open)}>
            {open ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        {!open && <div className="w-full h-[10px] bg-gray-100"></div>}
        {open && (
          <>
            {item?.carousel
              ? item?.carousel?.
              filter((dish) => dish?.dish?.info?.isVeg).
              map((dish) => (
                  <MenuCard key={dish?.dish?.info?.id} menuItem={dish?.dish?.info} />
                ))
              : 
              item?.itemCards?.
              filter((dish) => dish?.card?.info?.isVeg).
              map((dish) => (
                  <MenuCard key={dish?.card?.info?.id} menuItem={dish?.card?.info} />
                ))}
          </>
        )}
      </div>
    );
  }
   if (foodSelected == "non-veg" ) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-[100%]">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <button onClick={() => setOpen(!open)}>
            {open ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        {!open && <div className="w-full h-[10px] bg-gray-100"></div>}
        {open && (
          <>
            {item?.carousel
              ? item?.carousel?.
              filter((dish) => !dish?.dish?.info?.isVeg).
              map((dish) => (
                  <MenuCard key={dish?.dish?.info?.id} menuItem={dish?.dish?.info} />
                ))
              : 
              item?.itemCards?.
              filter((dish) => !dish?.card?.info?.isVeg).
              map((dish) => (
                  <MenuCard key={dish?.card?.info?.id} menuItem={dish?.card?.info} />
                ))}
          </>
        )}
      </div>
    );
  }
  console.log(item);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between w-[100%]">
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {!open && <div className="w-full h-[10px] bg-gray-100"></div>}
      {open && (
        <>
          {item?.carousel
            
            ? item?.carousel?.
            map((dish) => (
               <MenuCard key={dish?.dish?.info?.id} menuItem={dish?.dish?.info} />
              ))
            : item?.itemCards?.
            map((dish) => (
                <MenuCard key={dish?.card?.info?.id} menuItem={dish?.card?.info} />
              ))}
        </>
      )}
    </div>
  );
}
