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
      <div className="flex flex-col mt-24 mb-10 md:mt-10">
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

      <div className="flex flex-col flex-wrap md:flex-row gap-8">
        <div className="flex flex-col gap-6">
          <div className="bg-gray-400 flex flex-row flex-wrap justify-between items-center max-w-2xl">
            <div className="flex flex-col p-12">
              <h3 className="font-bold text-2xl leading-6">
                <span className="text-2xl font-bold">GET UP TO</span> <span className="font-bold text-3xl">60%</span>
              </h3>
              <p className="tracking-wider text-xl">
                For the summer season
              </p>
            </div>
            <div className="flex">
              <Image
                alt="event female pic"
                src="/assets/event-female-pic.webp"
                width="250"
                height="220"
              />
            </div>
          </div>
          <div className="bg-black flex flex-row flex-wrap justify-center items-center py-12 md:p-0">
            <div className="flex flex-col md:p-12">
              <h3 className="font-bold text-2xl md:text-4xl text-white text-center md:leading-9">
                GET UP TO <span>60%</span>
              </h3>
              <p className="md:tracking-wider text-center md:text-sm mt-3 text-white">
                USE PROMO CODE
              </p>
              <Button variant="secondary" className="mt-2">
                <span className="tracking-wider font-bold text-lg">DINEWEEKENDSALE</span>
              </Button>
            </div>
            {/* <div className="flex">
              <Image
                alt="event female pic"
                src="/assets/event-female-pic.webp"
                width="250"
                height="220"
              />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col bg-orange-200 p-8 gap-10">
            <div className="flex flex-col">
              <p>Flex Sweatshirt</p>
              <p>
                <span className="line-through">
                  $100.00
                </span>
                <span className="font-bold text-lg">
                  {" "}
                  $75.00
                </span>
              </p>
            </div>
            <div>
              <Image
                alt="event male 1 picture"
                src="/assets/event-male1-pic.webp"
                width="240"
                height="210"
              />
            </div>
          </div>
          <div className="flex flex-col bg-gray-400 p-6 gap-10">
            <div className="flex flex-col">
              <p>Flex Push Button Bomber</p>
              <p>
                <span className="line-through">
                  $225.00
                </span>
                <span className="font-bold text-lg">
                  {" "}
                  $190.00
                </span>
              </p>
            </div>
            <div>
              <Image
                alt="event male 2 picture"
                src="/assets/event-male2-pic.webp"
                width="240"
                height="210"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
