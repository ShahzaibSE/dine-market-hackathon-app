import React from "react";
import Image from "next/image";
import { Product } from "@/type";
import {
  Plus,
  Minus,
  Recycle,
  ShoppingCart,
  DeleteIcon,
} from "lucide-react";
import { Button } from "../ui/button";

export default function CartComponent() {
  return (
    <div className="flex flex-col justify-start items-start xl:flex-row xl:justify-between xl:items-end gap-6 xl:container">
      <div className="flex flex-col justify-start items-start gap-6 xl:container">
        <div className="flex my-4">
          <h1 className="font-bold text-2xl xl:text-3xl leading-6 tracking-wide">
            Shopping Cart
          </h1>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-3">
          {/* Items cart list */}
          <div className="flex flex-wrap xl:flex-nowrap xl:flex-row justify-between items-center gap-6">
            <div className="max-w-screen-xl">
              <Image
                alt="Female"
                src="/assets/female-clothes/female-sweatshirt.png"
                className="aspect-auto rounded-lg"
                width={400}
                height={400}
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-row justify-between items-between xl:gap-32">
                <div>
                  <h3 className="text-2xl leading-8 tracking-wide">
                    Brushed Raglan Sweatshirt
                  </h3>
                </div>
                <div className="flex">
                  <Button>
                    <DeleteIcon />
                  </Button>
                </div>
              </div>

              <div className="flex">
                <h3 className="text-gray-400 font-bold text-xl leading-6 tracking-wide">
                  Dress
                </h3>
              </div>

              <div className="flex">
                <p className="font-bold text-lg tracking-normal leading-6">
                  Delivery Estimation
                </p>
              </div>

              <div>
                <p className="text-yellow-300 font-bold tracking-normal leading-6">
                  5 Working Days
                </p>
              </div>

              <div className="flex justify-between items-center gap-36 xl:gap-x-80">
                <div>
                  <p className="font-bold text-xl leading-6 tracking-wide">
                    $195
                  </p>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-4">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-400">
                      <span>
                        <Minus />
                      </span>
                    </div>
                    <div>
                      <p>1</p>
                    </div>
                    <div className="flex justify-center items-center w-10 h-10 rounded-full border-black border-2">
                      <span>
                        <Plus />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Reciept section */}
          {/* <div className="flex"></div> */}
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-6 bg-blue-100 p-10 rounded-md w-full xl:w-2/5">
        <div className="flex justify-start items-start">
          <h3 className="font-bold tracking-wide leading-6 text-xl">
            Order Summary
          </h3>
        </div>
        <div className="flex flex-row justify-between items-start gap-14">
          <div>
            <p className="tracking-wide leading-6">
              Quantity
            </p>
          </div>
          <div>
            <p className="tracking-wide leading-6">
              2 Product
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-start gap-10">
          <div>
            <p className="tracking-wide leading-6">
              Sub Total
            </p>
          </div>
          <div>
            <p className="tracking-wide leading-6">
              $390
            </p>
          </div>
        </div>
        <div className="flex w-full">
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />{" "}
            <span className="font-bold">
              Proceed to Checkout
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
