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
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import { Product } from "@/type";

export const builder = imageUrlBuilder(client);

export function urlFor(product: string) {
  return createHyphenatedName(`/${product}`);
}

// const encodedProduct = encodeURIComponent(JSON.stringify(product));
export function createHyphenatedName(
  input: string
): string {
  // Remove numbers from the input string
  const stringWithoutNumbers = input.replace(
    /\d+/g,
    ""
  );

  // Replace spaces and special characters with hyphens
  const hyphenatedName = stringWithoutNumbers
    .toLowerCase()
    .replace(/[^a-z]+/g, "-");

  // Remove leading and trailing hyphens
  return hyphenatedName.replace(/^-+|-+$/g, "");
}

export default function ProductCard(props: {
  product: Product;
}) {
  try {
    // const {
    //   _id,
    //   name,
    //   gender,
    //   price,
    //   imageUrl,
    //   category,
    // } = props.product;
    //
    return (
      <div>
        <Link
          href={`/${
            props.product._id == null
              ? ""
              : props.product._id
          }`}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card>
              <CardContent>
                <div className="flex justify-center items-center">
                  <Image
                    alt={
                      props.product.name == null
                        ? "N/A"
                        : props.product.name
                    }
                    src={
                      props.product.imageUrl ==
                      null
                        ? ""
                        : urlForImage(
                            props.product.imageUrl
                          )
                            .width(300)
                            .url()
                    }
                    width="300"
                    height="320"
                    className="max-w-full"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-2">
                  <h3 className="font-bold text-2xl text-center md:text-center">
                    {props.product.name == null
                      ? "N/A"
                      : props.product.name}
                  </h3>
                  <h3 className="font-bold text-2xl">
                    $
                    {props.product.price == null
                      ? 0
                      : props.product.price}
                  </h3>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </Link>
      </div>
    );
  } catch (err) {
    return <div>Product Not Available</div>;
  }
}
