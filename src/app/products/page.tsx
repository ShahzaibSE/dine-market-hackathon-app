import React from "react";
import AllProductComponent from "../../../components/all_product/allProduct";
import { client } from "../../../sanity/lib/client";
import { Suspense } from "react";
import { BASE_PATH } from "../../../sanity/lib/base";
import { Product } from "@/type";

const getAllProducts = async function () {
  try {
    const res = await client.fetch(
      `*[_type == 'product' && gender == 'male' || gender == 'female'] `
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export default async function MalePage() {
  try {
    const path = `${BASE_PATH}api/products`;
    // const { data } = await (
    //   await fetch(path)
    // ).json();

    const data = await getAllProducts();

    const apiData: Array<Product> =
      data.length > 0 ? data : [];

    // console.log("All Products");
    // console.log(data);
    return (
      <div>
        <Suspense
          fallback={<div>Loading...</div>}
        >
          <AllProductComponent
            all_products={apiData}
          />
        </Suspense>
      </div>
    );
  } catch (err) {
    return <div>Error</div>;
  }
}
