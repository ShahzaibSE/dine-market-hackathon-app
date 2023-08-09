"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CartItem, Product } from "@/type";
import { capitaliseString } from "@/utils";
import {
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { productQtyInCartSelector } from "@/store/features/cartSlice";
import AddToCart from "../../components/cart/addToCart";
import ProductPreview from "../../components/product/productPreview";
import { useAppSelector } from "@/store/store";
import { totalCartItemsSelector } from "@/store/features/cartSlice";
import { totalPriceSelector } from "@/store/features/cartSlice";
import QuantityBtn from "./../cart/quantityBtn";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/store";

export function ProductDetail(props: {
  product_details: Product;
}) {
  const currentProduct = props.product_details;
  const cartProduct: CartItem = {product: currentProduct, quantity: 0};
  const [cartProductDetail, setCartProductDetail] = useState<CartItem>(cartProduct);
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  );
  const totalPrice = useAppSelector(
    totalPriceSelector
  );
  const totalItems = useAppSelector(
    totalCartItemsSelector
  );
  const dispatch = useAppDispatch();
  console.log("Show Product details - Product Detail Component");
  console.log(currentProduct);
  return (
    <div className="max-w-screen-xl flex flex-col justify-start items-center gap-20">
      <div className="xl:container flex flex-wrap xl:flex-row gap-10">
        <ProductPreview
          product={currentProduct}
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h2 className="tracking-widest text-2xl">
              {cartProduct?.product?.name}
            </h2>
            <h3 className="text-gray-400 font-bold text-xl tracking-wide">
              {cartProduct?.product?.category}
            </h3>
          </div>

          <div className="flex flex-col">
            <div>
              <p className="text-md font-bold tracking-normal">
                SELECT SIZE
              </p>
            </div>
            <div className="flex flex-row justify-between items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center hover:rounded-full hover:bg-slate-50 hover:border-gray-300 hover:border-4">
                <h3 className="font-bold text-md">
                  XS
                </h3>
              </div>
              <div className="w-10 h-10 flex justify-center items-center  hover:rounded-full hover:bg-slate-50 hover:border-gray-300 hover:border-4">
                <h3 className="font-bold text-md">
                  S
                </h3>
              </div>
              <div className="w-10 h-10 flex justify-center items-center  hover:rounded-full hover:bg-slate-50 hover:border-gray-300 hover:border-4">
                <h3 className="font-bold text-md">
                  M
                </h3>
              </div>
              <div className="w-10 h-10 flex justify-center items-center  hover:rounded-full hover:bg-slate-50 hover:border-gray-300 hover:border-4">
                <h3 className="font-bold text-md">
                  L
                </h3>
              </div>
              <div className="w-10 h-10 flex justify-center items-center  hover:rounded-full hover:bg-slate-50 hover:border-gray-300 hover:border-4">
                <h3 className="font-bold text-md">
                  XL
                </h3>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-6">
            <div className="flex justify-center items-center">
              <p className="font-bold text-md">
                Quantity:
              </p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <QuantityBtn
                quantity={totalItems}
                increaseQty={() =>
                  dispatch(
                    increaseQuantity(
                      currentProduct
                    )
                  )
                }
                decreaseQty={() =>
                  dispatch(
                    decreaseQuantity(
                      currentProduct
                    )
                  )
                }
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex">
              <AddToCart
                product={currentProduct}
              />
            </div>
            <div className="flex justify-center items-center">
              <h3 className="font-bold text-xl">
                ${cartProduct?.product?.price}
              </h3>
            </div>
          </div>
        </div>
        {/* <ProductDetail product_detail={currentProduct} /> */}
      </div>

      <div className="xl:container flex flex-row justify-start items-start gap-6">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="z-20 absolute">
            <h1 className="font-bold text-6xl xl:text-9xl opacity-25 text-gray-300 tracking-normal xl:tracking-wider leading-loose xl:leading-none">
              Overview
            </h1>
          </div>
          <div className="flex w-2/4 xl:w-full justify-start items-start relative top-10 xl:top-16">
            <h2 className="text-2xl xl:text-3xl font-bold tracking-wide leading-8">
              Product Information
            </h2>
          </div>
        </div>
      </div>

      <div className="hidden xl:block"></div>

      <div className="flex flex-col justify-between items-center gap-6 xl:container">
        <div className="flex flex-col xl:flex-row xl:container justify-between items-start gap-2">
          <div className="flex flex-col justify-start items-start">
            <h3 className="font-bold text-lg xl:text-xl text-gray-400 tracking-wider">
              PRODUCT DETAILS
            </h3>
          </div>
          <div className="flex justify-start items-start xl:w-4/6">
            <p className="text-lg leading-8 tracking-wider text-gray-600 text-justify">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
              Duis aute irure dolor in
              reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in
              culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-start xl:container gap-4 xl:gap-0 mt-6 xl:mt-0">
          <div className="flex flex-row justify-start items-start">
            <h3 className="font-bold text-lg xl:text-xl text-gray-400 tracking-wider">
              PRODUCT CARE
            </h3>
          </div>
          <div className="flex justify-start items-start xl:w-4/6">
            <ul className="list-disc">
              <li>
                <p className="font-bold text-lg leading-8 tracking-wide">
                  Hand wash using cold water.
                </p>
              </li>
              <li>
                <p className="font-bold text-lg leading-8 tracking-wide">
                  Do not using bleach.
                </p>
              </li>
              <li>
                <p className="font-bold text-lg leading-8 tracking-wide">
                  Hang it to dry.
                </p>
              </li>
              <li>
                <p className="font-bold text-lg leading-8 tracking-wide">
                  Iron on low temperature.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
