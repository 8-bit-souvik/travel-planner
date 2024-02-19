import React from "react";

const Card_component = () => {
  return (
    <div className="flex gap-4 flex-col ">

      {/* Card1 */}

      <div className="max-w-md  bg-gradient-to-r from-teal-200 to-teal-400 rounded-xl overflow-hidden mx-auto w-[100%] shadow-lg shadow-slate-700">
        <div className="px-6 py-2">
          <div className="font-bold text-xl  border-b border-white py-1 pb-2 text-center">
            Kolkata Travel Essentials
          </div>
          <div className="space-y-2">
            <div className="flex">
              <div className="mr-2">🌤️</div>
              <div>Weather: 14-26 deg , Partial Cloudy</div>
            </div>
            <div className="flex">
              <div className="mr-2">⏳</div>
              <div>Ideal duration for travel: 3 days</div>
            </div>
            <div className="flex">
              <div className="mr-2">🌟</div>
              <div>Best Time to visit: October to March</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-md  bg-gradient-to-r from-teal-400 to-teal-200 rounded-xl overflow-hidden shadow-md mx-auto w-[100%] shadow-slate-700">
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2 border-b border-white py-1 pb-2 text-center">
            Budget
          </div>
          <div className="space-y-2">
            <div className="flex">
              <div className="mr-2">🏨</div>
              <div>Accommodation: INR 10,000</div>
            </div>
            <div className="flex">
              <div className="mr-2">🍽️</div>
              <div>Restaurant: INR 3,000</div>
            </div>
            <div className="flex">
              <div className="mr-2">💰</div>
              <div>Total estimate including other charges: INR 15,000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card3 */}
      <div className="max-w-md  bg-gradient-to-r from-teal-200 to-teal-400 rounded-xl overflow-hidden mx-auto w-[100%] shadow-lg shadow-slate-700">
        <div className="px-14 py-6">
          <div className="font-bold text-xl mb-2 border-b border-white py-1 pb-2 text-center">
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
