import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export default function HomeComponent() {
  return (
    <div>
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
                beat your outfit as long as you
                wear Dine outfits.
              </p>
            </div>
            <div className="flex">
              <Button>
                <ShoppingCart className="mr-2 h-4 w-4" />{" "}
                <span className="font-bold">
                  Start Shopping
                </span>
              </Button>
            </div>
            <div className="flex flex-row flex-wrap justify-between items-center gap-6 mt-8">
              <div className="flex">
                <Image
                  className="aspect-auto"
                  alt="Featured Store 1"
                  src="/assets/Featured1.webp"
                  width="100"
                  height="35"
                />
              </div>
              <div className="flex">
                <Image
                  className="aspect-auto"
                  alt="Featured Store 2"
                  src="/assets/Featured2.webp"
                  width="100"
                  height="35"
                />
              </div>
              <div className="flex">
                <Image
                  className="aspect-auto"
                  alt="Featured Store 3"
                  src="/assets/Featured3.webp"
                  width="100"
                  height="35"
                />
              </div>
              <div className="flex">
                <Image
                  className="aspect-auto"
                  alt="Featured Store 4"
                  src="/assets/Featured4.webp"
                  width="100"
                  height="35"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hidden md:flex md:relative md:bottom-14 md:justify-start md:items-start md:w-[600px] md:h-[600px] md:rounded-full md:bg-orange-200">
            <Image
              className="md:relative left-14 pt-5"
              src="/assets/homepage-picture.webp"
              alt="dine market front image"
              width="700"
              height="700"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-24 md:mt-10">
        <div className="flex justify-center items-start">
          <p className="font-bold text-blue-600 text-base">
            PROMOTIONS
          </p>
        </div>
        <div className="flex justify-center items-start text-center md:m-4">
          <h1 className="text-3xl font-bold tracking-wider md:text-4xl">
            Our Promotions Events
          </h1>
        </div>
      </div>
    </div>
  );
}
