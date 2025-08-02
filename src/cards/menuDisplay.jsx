import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
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
              filter((dish)=> dish?.dish?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())).
              filter((dish) => dish?.dish?.info?.isVeg).
              map((dish) => (
                  <div
                    key={dish?.dish?.info?.id}
                    className="flex items-center justify-between p-2 border-b border-gray-200"
                  >
                    <div className="w-[70%] flex flex-col">
                      <h3 className="text-lg font-medium">
                        {dish?.dish?.info?.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold">
                        {dish?.dish?.info?.description}
                      </p>
                      <span className="text-sm text-gray-500">
                        ₹
                        {(dish?.dish?.info?.price ||
                          dish?.dish?.info?.defaultPrice) / 100}
                      </span>
                    </div>
                    <div className="w-[30%] flex justify-end flex-col items-center gap-4">
                      <img
                        src={
                          dish?.dish?.info?.imageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${dish?.dish?.info?.imageId}`
                            : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg"
                        }
                        alt={dish?.dish?.info?.name}
                        className="w-25 h-25 rounded-md object-cover"
                      />
                      <button className="w-30 bg-orange-500 text-white px-4 py-2 rounded-md ml-4">
                        Add
                      </button>
                    </div>
                  </div>
                ))
              : 
              item?.itemCards?.
              filter((dish)=> dish?.card?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())).
              filter((dish) => dish?.card?.info?.isVeg).
              map((dish) => (
                  <div
                    key={dish?.card?.info?.id}
                    className="flex items-center justify-between p-2 border-b border-gray-200"
                  >
                    <div className="w-[70%] flex flex-col">
                      <h3 className="text-lg font-medium">
                        {dish?.card?.info?.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold">
                        {dish?.card?.info?.description}
                      </p>
                      <span className="text-sm text-gray-500">
                        ₹
                        {(dish?.card?.info?.price ||
                          dish?.card?.info?.defaultPrice) / 100}
                      </span>
                    </div>
                    <div className="w-[30%] flex justify-end flex-col items-center gap-4">
                      <img
                        src={
                          dish?.card?.info?.imageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${dish?.card?.info?.imageId}`
                            : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg"
                        }
                        alt={dish?.card?.info?.name}
                        className="w-25 h-25 rounded-md object-cover"
                      />
                      <button className="w-30 bg-orange-500 text-white px-4 py-2 rounded-md ml-4">
                        Add
                      </button>
                    </div>
                  </div>
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
              filter((dish)=> dish?.dish?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())).
              filter((dish) => !dish?.dish?.info?.isVeg).
              map((dish) => (
                  <div
                    key={dish?.dish?.info?.id}
                    className="flex items-center justify-between p-2 border-b border-gray-200"
                  >
                    <div className="w-[70%] flex flex-col">
                      <h3 className="text-lg font-medium">
                        {dish?.dish?.info?.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold">
                        {dish?.dish?.info?.description}
                      </p>
                      <span className="text-sm text-gray-500">
                        ₹
                        {(dish?.dish?.info?.price ||
                          dish?.dish?.info?.defaultPrice) / 100}
                      </span>
                    </div>
                    <div className="w-[30%] flex justify-end flex-col items-center gap-4">
                      <img
                        src={
                          dish?.dish?.info?.imageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${dish?.dish?.info?.imageId}`
                            : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg"
                        }
                        alt={dish?.dish?.info?.name}
                        className="w-25 h-25 rounded-md object-cover"
                      />
                      <button className="w-30 bg-orange-500 text-white px-4 py-2 rounded-md ml-4">
                        Add
                      </button>
                    </div>
                  </div>
                ))
              : 
              item?.itemCards?.
              filter((dish)=> dish?.card?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())).
              filter((dish) => !dish?.card?.info?.isVeg).
              map((dish) => (
                  <div
                    key={dish?.card?.info?.id}
                    className="flex items-center justify-between p-2 border-b border-gray-200"
                  >
                    <div className="w-[70%] flex flex-col">
                      <h3 className="text-lg font-medium">
                        {dish?.card?.info?.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold">
                        {dish?.card?.info?.description}
                      </p>
                      <span className="text-sm text-gray-500">
                        ₹
                        {(dish?.card?.info?.price ||
                          dish?.card?.info?.defaultPrice) / 100}
                      </span>
                    </div>
                    <div className="w-[30%] flex justify-end flex-col items-center gap-4">
                      <img
                        src={
                          dish?.card?.info?.imageId
                            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${dish?.card?.info?.imageId}`
                            : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg"
                        }
                        alt={dish?.card?.info?.name}
                        className="w-25 h-25 rounded-md object-cover"
                      />
                      <button className="w-30 bg-orange-500 text-white px-4 py-2 rounded-md ml-4">
                        Add
                      </button>
                    </div>
                  </div>
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
            filter((dish)=> dish?.dish?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())).
            map((dish) => (
                <div
                  key={dish?.dish?.info?.id}
                  className="flex items-center justify-between p-2 border-b border-gray-200"
                >
                  <div className="w-[70%] flex flex-col">
                    <h3 className="text-lg font-medium">
                      {dish?.dish?.info?.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-semibold">
                      {dish?.dish?.info?.description}
                    </p>
                    <span className="text-sm text-gray-500">
                      ₹
                      {(dish?.dish?.info?.price ||
                        dish?.dish?.info?.defaultPrice) / 100}
                    </span>
                  </div>
                  <div className="w-[30%] flex justify-end flex-col items-center gap-4">
                    <img
                      src={
                        dish?.dish?.info?.imageId
                          ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${dish?.dish?.info?.imageId}`
                          : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg"
                      }
                      alt={dish?.dish?.info?.name}
                      className="w-25 h-25 rounded-md object-cover"
                    />
                    <button className="w-30 bg-orange-500 text-white px-4 py-2 rounded-md ml-4">
                      Add
                    </button>
                  </div>
                </div>
              ))
            : item?.itemCards?.
            filter((dish)=> dish?.card?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())).
            map((dish) => (
                <div
                  key={dish?.card?.info?.id}
                  className="flex items-center justify-between p-2 border-b border-gray-200"
                >
                  <div className="w-[70%] flex flex-col">
                    <h3 className="text-lg font-medium">
                      {dish?.card?.info?.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-semibold">
                      {dish?.card?.info?.description}
                    </p>
                    <span className="text-sm text-gray-500">
                      ₹
                      {(dish?.card?.info?.price ||
                        dish?.card?.info?.defaultPrice) / 100}
                    </span>
                  </div>
                  <div className="w-[30%] flex justify-end flex-col items-center gap-4">
                    <img
                      src={
                        dish?.card?.info?.imageId
                          ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${dish?.card?.info?.imageId}`
                          : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg"
                      }
                      alt={dish?.card?.info?.name}
                      className="w-25 h-25 rounded-md object-cover"
                    />
                    <button className="w-30 bg-orange-500 text-white px-4 py-2 rounded-md ml-4">
                      Add
                    </button>
                  </div>
                </div>
              ))}
        </>
      )}
    </div>
  );
}
