import React from "react";

const Card_component = () => {
  return (
    <div className="flex gap-2 flex-col">
      <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-black font-bold py-2 px-4 rounded w-full">
        Click Here For Detailed Itinerary
      </button>

      {/* Card1 */}

      <div className="max-w-md mx-auto bg-gradient-to-r from-teal-200 to-teal-400 rounded-xl overflow-hidden shadow-md">
        <div className="px-6 py-2">
          <div className="font-bold text-xl  border-b border-white pb-1 text-center">
            Kolkata Travel Essentials
          </div>
          <div className="space-y-2">
            <div className="flex">
              <div className="mr-2">🌤️</div>
              <div>Weather: Sunny with a touch of history</div>
            </div>
            <div className="flex">
              <div className="mr-2">⏳</div>
              <div>Ideal duration for travel: 3-4 days</div>
            </div>
            <div className="flex">
              <div className="mr-2">🌟</div>
              <div>Best Time to visit: All year round, but avoid monsoon</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-md mx-auto bg-gradient-to-r from-teal-400 to-teal-200 rounded-xl overflow-hidden shadow-md ">
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2 border-b border-white pb-1 text-center">
            Budget
          </div>
          <div className="space-y-2">
            <div className="flex">
              <div className="mr-2">🏨</div>
              <div>Accommodation: INR 10,000</div>
            </div>
            <div className="flex">
              <div className="mr-2">🍽️</div>
              <div>restaurant: INR 3,000</div>
            </div>
            <div className="flex">
              <div className="mr-2">💰</div>
              <div>Total estimate including other charges: INR 15,000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card3 */}
      <div className="max-w-md mx-auto bg-gradient-to-r from-teal-200 to-teal-400 rounded-xl overflow-hidden shadow-md">
        <div className="px-14 py-6">
          <div className="font-bold text-xl mb-2 border-b border-white pb-1 text-center">
            Accomodation & Restaurant
          </div>
          <div className="space-y-2">
            <div className="flex">
              <div className="mr-2">🏨</div>
              <div>Hotel name: The Oberoi Grand</div>
            </div>
            <div className="flex">
              <div className="mr-2">⭐</div>
              <div>Stay rating: 9.5 / 10</div>
            </div>
            <div className="flex">
              <div className="mr-2">💎</div>
              <div>Specialty: Luxury hotel with spa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_component;
