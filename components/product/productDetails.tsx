'use client';
import React from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Image as IImage } from "sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import { Product } from "@/type";

export function ProductDetail(props: {
  product_detail: Product;
}) {
  const currentProduct = props.product_detail;
  console.log("Show Product details - Product Detail Component");
  console.log(currentProduct);
  return (
    <div className="flex">
      <div className="flex">
        <div className="flex flex-col justify-between items-center gap-4">
          <>
            {currentProduct.previews?.map(
              (product: any, index: number) => (
                <Image
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
        </div>
        <div className="flex"></div>
      </div>
      <div className="flex"></div>
    </div>
  );
}
