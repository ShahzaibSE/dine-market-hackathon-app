import React from "react";
import Image from "next/image";
import { Product } from "@/type";
import {
  Plus,
  Minus,
  Delete,
} from "lucide-react";
import { Button } from "../ui/button";

export default function CartComponent() {
  return (
    <div className="flex flex-col justify-start items-start gap-6 xl:container">
      <div>
        <h1 className="font-bold text-2xl xl:text-3xl leading-6 tracking-wide">
          Shopping Cart
        </h1>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-6">
        {/* Items cart list */}
        <div className="flex flex-wrap xl:flex-nowrap xl:flex-row justify-between items-center gap-6">
          <div className="w-full">
            <Image
              alt="Female"
              src="/assets/female-clothes/female-sweatshirt.png"
              className="aspect-auto rounded-lg"
              width={200}
              height={200}
            />
          </div>

          <div>
            <div className="flex flex-row justify-between items-center gap-10">
              <div>
                <h3 className="font-bold text-lg leading-8 tracking-wide">
                  Brushed Raglan Sweatshirt
                </h3>
              </div>
              <div>
                <Button>
                  <Delete />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-gray-400 font-bold text-xl leading-6 tracking-wide">
                Dress
              </h3>
            </div>

            <div>
              <p className="font-bold text-lg tracking-normal leading-6">
                Delivery Estimation
              </p>
            </div>

            <div>
              <p className="text-yellow-300 font-bold tracking-normal leading-6">
                5 Working Days
              </p>
            </div>

            <div className="flex justify-between items-center gap-10">
              <div>
                <p className="font-bold text-lg leading-6 tracking-normal">
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
  );
}
