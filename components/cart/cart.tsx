"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { CartAPIModel } from "@/type";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/store";
import CartItemCard from "./cartItemCard";
import { totalPriceSelector } from "@/store/features/cartSlice";
import { totalCartItemsSelector } from "@/store/features/cartSlice";
import { useGetCartItemsQuery } from "@/store/services/cartAPI";
import {
  updateCartList,
  addToCart,
} from "@/store/features/cartSlice";
import { CartItem } from "@/type";

export default function CartComponent() {
  const { data } = useGetCartItemsQuery(null);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  );
  const totalPrice = useAppSelector(
    totalPriceSelector
  );
  const totalItems = useAppSelector(
    totalCartItemsSelector
  );
  console.log("Cart Items");
  console.log(cartItems);
  console.log("Total Items - Cart Component");
  console.log(totalItems);
  console.log("Total Price - Cart Component");
  console.log(totalPrice);

  useEffect(() => {
    // dispatch(updateCartList(data as CartItem[]))
  }, [data, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-start items-start gap-6 xl:container">
        <div className="flex justify-start items-center my-4">
          <h1 className="font-bold text-2xl xl:text-3xl leading-6 tracking-wide">
            Shopping Cart
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-end gap-10 xl:gap-2 xl:container">
        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-start gap-4 xl:flex-row xl:gap-8">
            <div className="flex flex-wrap justify-between items-center gap-3 max-h-full xl:w-4/5 overflow-scroll">
              {/* Items cart list */}
              {cartItems.map(
                (cartItem, index: number) => (
                  <CartItemCard
                    key={index}
                    cartItem={cartItem}
                  />
                )
              )}
            </div>

            <div className="flex flex-col justify-start items-start gap-8 bg-blue-100 p-6 xl:p-10 rounded-md w-full xl:w-2/5">
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
                    {totalItems.toString()}{" "}
                    Product
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
                    ${totalPrice.toString()}
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
        ) : null}
      </div>
    </div>
  );
}
