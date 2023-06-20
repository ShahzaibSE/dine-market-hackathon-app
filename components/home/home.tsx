import React from "react";

export default function HomeComponent() {
  return (
    <div>
      <div className="flex flex-col justify-around items-start w-full md:space-x-4 md:w-2/4">
        <div className="flex flex-col justify-start items-start">
          <div className="h-10 w-32 bg-blue-100 rounded-sm flex justify-center items-center">
            <p className="text-blue-600 font-bold">
              Sale 70%
            </p>
          </div>
          <div className="flex justify-center items-center py-4">
            <h1 className="text-4xl tracking-wider font-bold md:text-6xl md:tracking-wider md:font-bold">
              An Industrial Take on Streetwear
            </h1>
          </div>
          <div className="flex justify-center items-center py-6">
            <p className="text-lg">
              Anyone can beat you but no one can
              beat your outfit as long as you wear
              Dine outfits.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex md:w-[600px] md:h-[600px] md:bg-orange-300"></div>
        </div>
      </div>
    </div>
  );
}
