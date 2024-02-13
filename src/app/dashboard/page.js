import React from "react";
import data from "./../../data/data.json";

export default function Dashboard() {
  console.log("data: ", data);

  return (
    <div className="flex flex-col w-full">
      <div></div>

      <div className="flex w-full">
        {/* Accordian */}
        <div className="w-3/4 bg-blue-500 p-4">
          <h1>3 Days TRip to kolkata</h1>
        </div>

        {/* Budget , accomodation cards */}

        <div className="w-2/4 bg-green-500 p-4 w-">
          <div>Click Here For detailed Itenary</div>
          <div class="max-w-md mx-auto bg-gradient-to-r from-teal-200 to-teal-400 rounded-xl overflow-hidden shadow-md">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 border-b border-white pb-1">
                Kolkata Travel Essentials
              </div>
              <div class="space-y-2">
                <div class="flex">
                  <div class="mr-2">🌤️</div>
                  <div>Weather: Sunny with a touch of history</div>
                </div>
                <div class="flex">
                  <div class="mr-2">⏳</div>
                  <div>Ideal duration for travel: 3-4 days</div>
                </div>
                <div class="flex">
                  <div class="mr-2">🌟</div>
                  <div>
                    Best Time to visit: All year round, but avoid monsoon
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>

          <div></div>
        </div>

        {/* maps , other buttons */}

        <div className="w-1/4 bg-red-500 p-4">
          <div>hello</div>

          <div> </div>
        </div>
      </div>
    </div>
  );
}
