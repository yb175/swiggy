export default function OfferCard({ offer }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 flex items-center gap-4 hover:shadow-lg transition duration-200 ease-in-out w-120 h-40">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offer.offerLogo}`}
        alt="Offer Logo"
        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-lg font-semibold text-gray-800">{offer.header}</h2>
        <p className="text-sm text-gray-600">{offer.description}</p>
      </div>
    </div>
  );
}