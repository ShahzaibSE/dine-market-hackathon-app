"use client";
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
import { CartItem } from "@/type";
import { urlForImage } from "../../sanity/lib/image";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/store";
import QuantityBtn from "./quantityBtn";

interface Props {
  cartItem: CartItem;
}

export default function CartItemCard({
  cartItem,
}: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-wrap justify-between items-center gap-3">
      {/* Items cart list */}
      <div className="flex flex-wrap xl:flex-nowrap xl:flex-row justify-between items-center gap-6">
        <div className="max-w-screen-xl">
          <Image
            alt={cartItem.product.name}
            src={urlForImage(
              cartItem.product.imageUrl
            )
              .width(400)
              .url()}
            className="aspect-auto rounded-lg"
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex flex-row justify-between items-between gap-20 xl:gap-80">
            <div>
              <h3 className="text-xl font-bold leading-8 tracking-wide">
                {cartItem.product.name}
              </h3>
            </div>
            <div className="flex">
              <Button onClick={()=>dispatch(removeItem(cartItem.product))}>
                <DeleteIcon />
              </Button>
            </div>
          </div>

          <div className="flex">
            <h3 className="text-gray-400 font-bold text-xl leading-6 tracking-wide">
              {cartItem.product.category}
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

          <div className="flex flex-row justify-center xl:justify-between items-center gap-16 xl:gap-32 xl:gap-x-80">
            <div>
              <p className="font-bold text-xl leading-6 tracking-wide">
                ${cartItem.product.price}
              </p>
            </div>
            <div>
              <QuantityBtn
                quantity={cartItem.quantity}
                increaseQty={() =>
                  dispatch(
                    increaseQuantity(
                      cartItem
                    )
                  )
                }
                decreaseQty={() =>
                  dispatch(
                    decreaseQuantity(
                      cartItem
                    )
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* Reciept section */}
      {/* <div className="flex"></div> */}
    </div>
  );
}
