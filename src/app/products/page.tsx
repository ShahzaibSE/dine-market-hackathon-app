import React from "react";
import AllProductComponent from "../../../components/all_product/allProduct";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";

const getAllProducts =
  async function () {
    try {
      const res = await client.fetch(
        `*[_type == 'product' && gender == 'male' || gender == 'female' || gender == 'kid'] `
      );
      return res;
    } catch (err) {
      throw err;
    }
  };

export default async function MalePage() {
  const allProducts = await getAllProducts();
  return (
    <div>
        <AllProductComponent all_products={allProducts}/>
    </div>
  );
}
