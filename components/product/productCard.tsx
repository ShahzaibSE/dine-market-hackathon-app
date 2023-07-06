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
} from "./../ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Image as IImage } from "sanity";
import imageUrlBuilder from '@sanity/image-url';
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

export const builder = imageUrlBuilder(client);

export interface Product {
   name: string;
   description?: string;
   gender: string;
   price: string;
   category?: string;
   imageUrl: IImage;
}

// export function urlFor(source: any) {
//   return builder.image(source)
// }

export default function ProductCard(props: {product: Product}) {
  const {name , gender, price, imageUrl } = props.product;
  // console.log("Product information");
  // console.log(name);
  // console.log(gender);
  // console.log(price);
  // console.log(imageUrl);
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Card>
          <CardContent>
            <div className="flex justify-center items-center">
              <Image
                alt="female-brushed-reglan-sweatshirt"
                src={urlForImage(imageUrl).width(300).url()}
                width="300"
                height="320"
                className="max-w-full"
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col justify-between items-center gap-2">
              <h3 className="font-bold text-2xl md:3xl">
                Brushed Reglan Sweatshirt
              </h3>
              <h3 className="font-bold text-2xl md:3xl">
                $195
              </h3>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
