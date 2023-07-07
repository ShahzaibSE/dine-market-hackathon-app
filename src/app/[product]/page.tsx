import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";

export async function getProduct(name: string) {
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
    return product;
  } catch (err) {
    throw err;
  }
}

export function capitaliseString(str: string) {
  return str
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

export default async function GiveProduct({
  params,
  searchParams,
  badgeVal
}: {
  params: { product: string };
  searchParams: { id: string };
  badgeVal: number
}) {
  const currentProduct = await getProduct(
    params.product
  );
  console.log(currentProduct);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex flex-wrap p-12 md:p-24">
        My name is {capitaliseString(params.product)}
        <div className="flex">
          <div className="flex">
            <div className="flex"></div>
            <div className="flex"></div>
          </div>
          <div className="flex"></div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
