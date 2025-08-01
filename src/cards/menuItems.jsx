export default function MenuItems({ menuItems }) {
  console.log(menuItems[0]?.title);
  console.log(menuItems[1]?.itemCards);
  console.log(menuItems);
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
          <div key={index} className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            {item?.carousel
              ? item?.carousel?.map((dish) => (
                  <div
                    key={dish?.dish?.info?.id}
                    className="flex items-center justify-between p-2 border-b border-gray-200"
                  >
                    <div className="w-[70%] flex flex-col">
                      <h3 className="text-lg font-medium">
                        {dish?.dish?.info?.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold">
                        {dish.dish.info.description}
                      </p>
                      <span className="text-sm text-gray-500">
                        ₹{dish?.dish?.info?.price / 100}
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
                ))
              : item?.itemCards?.map((dish) => (
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
                        ₹{dish?.card?.info?.price / 100}
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
          </div>
        );
      })}
    </div>
  );
}
