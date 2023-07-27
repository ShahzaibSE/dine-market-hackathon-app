"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/type";
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";

interface Props {
  product: Product;
}

export default function ProductPreview({
  product,
}: Props) {
  const defaultImage = {_type:"image", asset: {_ref:"image-2228e40aa700a68031eff4016f9e625ade813a89-278x296-png",
    _type:"reference"}}
  const product_details = product;
  const productInfo = {
    previews: product_details?.previews == undefined ? [] : product_details.previews,
    imageUrl: product_details?.imageUrl == undefined ? "" : product_details.imageUrl
  }
  // let previews = product.previews.length == null ? [] : product.previews
  // const imageUrl: IImage | undefined =  
  const [bigPreviewImage, setBigPreviewImage] =
    useState<IImage>(product_details?.imageUrl);
  console.log("Product Details - Product Preview");
  console.log(productInfo);
  return (
    <div className="flex flex-row gap-4">
      <div className="flex">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex flex-col justify-between items-center gap-4">
            <>
              {product_details?.previews && product_details?.previews.map(
                (product: any, index: number) => (
                  <div
                    className="flex"
                    key={index}
                    onMouseOver={()=>{setBigPreviewImage(product)}}
                  >
                    <Image
                      className="aspect-auto"
                      key={index}
                      src={urlForImage(product == undefined ? defaultImage : product)
                        .width(50)
                        .url()}
                        alt={`${product_details?.name}`}
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
            alt={`${product_details?.name}`}
            src={urlForImage(bigPreviewImage)
              .width(600)
              .url()}
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
