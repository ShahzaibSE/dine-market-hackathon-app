import React, { useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { Product } from "@/type";
import { capitaliseString } from "@/utils";
import {
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { productQtyInCartSelector } from "@/store/features/cartSlice";
import AddToCart from "../../../components/cart/addToCart";
import ProductPreview from "../../../components/product/productPreview";

async function getProduct(name: string) {
  try {
    const productName = name
      .split("-")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join(" ");
    //
    const product = await client.fetch(
      `*[_type == 'product' && name == '${productName}']`
    );
    //
    console.log(
      `Product name on detail page - ${productName}`
    );
    return product;
  } catch (err) {
    throw err;
  }
}

// export const getServerSideProps: GetServerSideProps<{
//   res: Product
// }> = async () => {
//   const product = await client.fetch(
//     `*[_type == 'product' && name == '${productName}']`
//   );
//   const repo = await res;
//   return { props: { repo } }
// }

export default async function GiveProduct({
  params,
  searchParams,
}: {
  params: { product: string };
  searchParams: { id: string };
}) {
  const { data } = await (
    await fetch(
      `http:localhost:3000/api/productDetails?q=${params.product}`
    )
  ).json();
  // const [currentImage, setcurrentImage] = useState();
  const product_details: Product = data[0];
  return (
    <div className="max-w-screen-xl flex flex-col justify-start items-center gap-20">
      <div className="xl:container flex flex-wrap xl:flex-row gap-10">
        {/* <div className="flex">
        My name is{" "}
        {data[0].name}
      </div> */}
        {/* <div className="flex flex-row gap-4">
          <div className="flex">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-between items-center gap-4">
                <>
                  {product_details.previews?.map(
                    (
                      product: any,
                      index: number
                    ) => (
                      <div
                        className="flex"
                        key={index}
                      >
                        <Image
                          className="aspect-auto"
                          key={index}
                          src={urlForImage(
                            product
                          )
                            .width(50)
                            .url()}
                          alt={
                            product_details.name
                          }
                          width={50}
                          height={50}
                        />
                      </div>
                    )
                  )}
                </>
              </div>
            </div>

            <div className="flex"></div>
          </div>
          <div className="flex">
            <div className="flex justify-center items-center w-full h-full relative">
              <Image
                className="object-cover"
                alt="preview image 1"
                src="/assets/male-clothes/male-flex-button-bomber.png"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div> */}
        <ProductPreview product={product_details} />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h2 className="tracking-widest text-2xl">
              {product_details?.name}
            </h2>
            <h3 className="text-gray-400 font-bold text-xl tracking-wide">
              Jacket
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

          <div className="flex gap-4">
            <div className="flex">
              <AddToCart
                product={product_details}
              />
            </div>
            <div className="flex justify-center items-center">
              <h3 className="font-bold text-xl">
                $225.00
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
