import React from "react";
import AllProductComponent from "../../../components/all_product/allProduct";
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
  const {data} =
  await (await fetch(`http://localhost:3000/api/products`)).json();
  console.log("All Products");
  console.log(data);
  return (
    <div>
        <AllProductComponent all_products={data}/>
    </div>
  );
}
