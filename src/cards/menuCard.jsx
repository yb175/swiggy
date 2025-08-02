export default function MenuCard({ menuItem }) {
  console.log(` I am menuItem ${menuItem}`);
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
        <button className="w-30 bg-orange-500 text-white px-4 py-2 rounded-md ml-4">
          Add
        </button>
      </div>
    </div>
  );
}
