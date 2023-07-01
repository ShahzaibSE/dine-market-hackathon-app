"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./../ui/card";
//
import "swiper/css";
// import "swiper/css/navigation";
import HomeSlider from "./home_slider";

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

      <div className="flex flex-col mt-24 mb-10 md:mt-28">
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
                <span className="text-2xl font-bold">
                  GET UP TO
                </span>{" "}
                <span className="font-bold text-3xl">
                  60%
                </span>
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
              <Button
                variant="secondary"
                className="mt-2"
              >
                <span className="tracking-wider font-bold text-lg">
                  DINEWEEKENDSALE
                </span>
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

      <div className="flex flex-col mt-24 md:mt-28">
        <div className="flex justify-center items-start">
          <p className="font-bold text-blue-600 text-base">
            PRODUCTS
          </p>
        </div>
        <div className="flex justify-center items-start text-center md:m-4">
          <h1 className="text-3xl font-bold tracking-wider md:text-4xl">
            Check What We Have
          </h1>
        </div>
      </div>

      <div
        id="featured-products"
        className="flex flex-col md:flex-row justify-between items-center my-12 gap-4"
      >
        <motion.div whileHover={{ scale: 1.2 }}>
          <Card>
            <CardContent>
              <div className="flex justify-center items-center">
                <Image
                  alt="female-brushed-reglan-sweatshirt"
                  src="/assets/female-clothes/female-brushed-raglan-sweatshirt.png"
                  width="300"
                  height="320"
                  className="max-w-full"
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col justify-between items-center gap-2">
                <h3 className="font-bold text-2xl md:3xl">
                  Brushed Reglan Sweatshirt
                </h3>
                <h3 className="font-bold text-2xl md:3xl">
                  $195
                </h3>
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }}>
          <Card>
            <CardContent>
              <div className="flex justify-center items-center">
                <Image
                  alt="female-brushed-reglan-sweatshirt"
                  src="/assets/female-clothes/cameryn-sash-tie-dress-1.png"
                  width="300"
                  height="320"
                  className="max-w-full"
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col justify-between items-center gap-2">
                <h3 className="font-bold text-2xl md:3xl">
                  Cameryn Sash Tie Dress
                </h3>
                <h3 className="font-bold text-2xl md:3xl">
                  $545
                </h3>
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }}>
          <Card>
            <CardContent>
              <div className="flex justify-center items-center">
                <Image
                  alt="female-brushed-reglan-sweatshirt"
                  src="/assets/female-clothes/female-flex-sweatshirt.png"
                  width="300"
                  height="320"
                  className="max-w-full"
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col justify-between items-center gap-2">
                <h3 className="font-bold text-2xl text-center md:3xl">
                  Brushed Flex Sweatshirt
                </h3>
                <h3 className="font-bold text-2xl md:3xl">
                  $175
                </h3>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-end md:justify-center items-start gap-10 mt-20">
        <div className="grid grid-rows-2 grid-flow-col gap-10 pt-10">
          <div className="z-10 absolute">
            <h1 className="font-bold text-7xl md:text-8xl opacity-25 text-gray-300 tracking-normal md:tracking-widest leading-loose md:leading-none">
              Different <br /> From <br /> Others
            </h1>
          </div>
          <div className="flex flex-col justify-between items-start gap-2 my-3">
            <h3 className="font-bold text-md text-start md:text-lg leading-6">
              Using Good Quality Materials
            </h3>
            <p className="text-lg tracking-normal text-start">
              Lorem ipsum dolor sit amt,
              consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col justify-between items-start gap-2 my-3">
            <h3 className="font-bold text-md text-start md:text-lg leading-6">
              Using Good Quality Materials
            </h3>
            <p className="text-lg tracking-normal text-start">
              Lorem ipsum dolor sit amt,
              consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col justify-between items-start gap-2 my-3">
            <h3 className="font-bold text-md text-start md:text-lg leading-6">
              Using Good Quality Materials
            </h3>
            <p className="text-lg tracking-normal text-start">
              Lorem ipsum dolor sit amt,
              consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col justify-between items-start my-3">
            <h3 className="font-bold text-md text-start md:text-lg leading-6">
              Using Good Quality Materials
            </h3>
            <p className="text-lg tracking-normal text-start">
              Lorem ipsum dolor sit amt,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end items-end gap-4">
          <div className="flex">
            <h1 className="font-bold text-5xl">
              Unique and Authentic <br /> Vintage
              Designer <br /> Jewellery
            </h1>
          </div>
          <br/>
          <div className="flex flex-col md:flex-row justify-end items-center gap-8">
            <div className="flex">
              <Image
                className="aspect-auto"
                alt="featured-unique-picture"
                src="/assets/feature-unique-pic.webp"
                width={300}
                height={350}
              />
            </div>
            <div className="flex flex-col justify-start items-start md:w-2/5">
              <div className="flex">
                <p className="tracking-wide text-md leading-6 text-justify">
                  This piece is ethically crafted
                  in our small family-owned
                  workshop in Peru with unmatched
                  attention to detail and care.
                  The Natural color is the actual
                  natural color of the fiber,
                  undyed and 100% traceable.
                </p>
              </div>
              <div className="flex justify-start items-start py-8">
                <Button>
                  <span className="font-bold">
                    Start Shopping
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      {/* <div>
        <HomeSlider />
      </div> */}
    </div>
  );
}
