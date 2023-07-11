import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { ProductDetail } from "../../../components/product/productDetails";
import { Product } from "@/type";
import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
} from "next";
import {Minus, Plus} from "lucide-react";

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

function capitaliseString(str: string) {
  return str
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
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
  const currentProduct = await getProduct(
    params.product
  );
  // console.log(
  //   "Product details - Product Detail Page"
  // );
  // console.log(currentProduct);
  return (
    <div className="flex flex-wrap md:flex-row gap-6">
      {/* <div className="flex">
        My name is{" "}
        {capitaliseString(params.product)}
      </div> */}
      <div className="flex flex-row gap-4">
        <div className="flex">
          {/* <div className="flex flex-col justify-between items-center gap-4">
            <>
              {currentProduct.previews?.map(
                (product: any, index: number) => (
                  <Image
                  className="aspect-auto"
                    key={index}
                    src={urlForImage(product)
                      .width(50)
                      .url()}
                    alt={currentProduct.name}
                    width={50}
                    height={50}
                  />
                )
              )}
            </>
          </div> */}
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex">
              <Image
                className="aspect-auto"
                alt="preview image 1"
                src="/assets/male-clothes/male-flex-button-bomber.png"
                width="50"
                height="50"
              />
            </div>
            <div className="flex">
              <Image
                className="aspect-auto"
                alt="preview image 1"
                src="/assets/male-clothes/male-flex-button-bomber.png"
                width="50"
                height="50"
              />
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
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h2 className="tracking-widest text-2xl">
            Flex Push Button Bomber
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
              <h3 className="font-bold text-md">XS</h3>
            </div>
            <div className="w-10 h-10 flex justify-center items-center  hover:rounded-full hover:bg-slate-50 hover:border-gray-300 hover:border-4">
              <h3 className="font-bold text-md">S</h3>
            </div>
            <div className="w-10 h-10 flex justify-center items-center  hover:rounded-full hover:bg-slate-50 hover:border-gray-300 hover:border-4">
              <h3 className="font-bold text-md">M</h3>
            </div>
            <div className="w-10 h-10 flex justify-center items-center  hover:rounded-full hover:bg-slate-50 hover:border-gray-300 hover:border-4">
              <h3 className="font-bold text-md">L</h3>
            </div>
            <div className="w-10 h-10 flex justify-center items-center  hover:rounded-full hover:bg-slate-50 hover:border-gray-300 hover:border-4">
              <h3 className="font-bold text-md">XL</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="font-bold text-md">Quantity:</p>
          </div>
          <div>

          </div>
        </div>
        <div className="flex"></div>
      </div>
      {/* <ProductDetail product_detail={currentProduct} /> */}
    </div>
  );
}
