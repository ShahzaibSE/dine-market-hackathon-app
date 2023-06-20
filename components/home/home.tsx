import React from "react";
import Image from "next/image";

export default function HomeComponent() {
  return (
    <div className="flex flex-col justify-start item-start md:flex-row md:justify-start md:items-start md:space-x-20">
      <div className="flex flex-col justify-around items-start w-full md:w-2/4">
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
      </div>
      <div>
        <div className="hidden md:flex md:relative md:bottom-14 md:justify-start md:items-start md:w-[600px] md:h-[600px] md:rounded-full md:bg-orange-200">
          {/* <Image src="/assets/homepage-picture.webp" alt="dine market front image" width="100" height="100"/> */}
        </div>
      </div>
    </div>
  );
}
