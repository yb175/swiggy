import { Link } from "react-router";
export default function RestCard({ restaurant }) {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        areaName,
        aggregatedDiscountInfoV3,
    } = restaurant.info;

    return (
        <Link to={`/secondaryHome/menu/${restaurant.info.id}`} className="no-underline">
        <div className="w-[321px] h-[340px] m-4 p-4 rounded-lg shadow-lg flex flex-col items-center 
        justify-start relative bg-white transform transition duration-500 hover:-translate-y-2">
            <div className="relative">
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                    alt={name}
                    className="w-[240px] h-[160px] rounded-lg object-cover"
                />
                <div className="absolute bottom-0 w-[240px] h-[60px] rounded-b-lg bg-gradient-to-t from-black to-transparent"></div>
                <h2 className="absolute bottom-2 left-3 text-white font-bold text-sm">
                    {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
                </h2>
            </div>

            <h3 className="text-lg font-semibold mt-3 text-center">{name}</h3>
            <p className="text-sm text-gray-600 text-center">{cuisines?.join(', ')}</p>

            <div className="flex items-center justify-between w-full px-2 mt-2 text-sm text-gray-700">
                <span>🌟 {avgRating}</span>
                <span className="font-medium">{sla?.deliveryTime} mins</span>
            </div>

            <div className="mt-1 text-xs text-gray-500">{areaName}</div>
        </div>
        </Link>
    );
}