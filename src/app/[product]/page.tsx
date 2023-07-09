import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { Product } from "../../../components/product/productCard";
import { ProductDetail } from "../../../components/product/productDetails";
import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
} from "next";

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
  console.log(
    "Product details - Product Detail Page"
  );
  console.log(currentProduct);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex flex-wrap p-12 md:p-24">
        <div className="flex">
          My name is{" "}
          {capitaliseString(params.product)}
        </div>
        <div className="flex">
          <div className="flex">
            <div className="flex flex-col justify-between items-center gap-4">
              <>
                {currentProduct.previews?.map(
                  (
                    product: any,
                    index: number
                  ) => (
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
        {/* <ProductDetail product_detail={currentProduct} /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
