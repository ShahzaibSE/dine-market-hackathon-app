import React, { Suspense } from "react";
import MaleComponent from "../../../components/male_product/male";
import { client } from "../../../sanity/lib/client";
import { BASE_PATH } from "../../../sanity/lib/base";
import { Product } from "@/type";

const getMaleProducts = async function () {
  try {
    const res = await client.fetch(
      `*[_type == 'product' && gender == 'male'] `
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export default async function MalePage() {
  try {
    const path = `${BASE_PATH}api/product?gender=male`;
    // const { data } = await (
    //   await fetch(path)
    // ).json();
    const data = await getMaleProducts();
    const apiData: Array<Product> =
      data.length > 0 ? data : [];

    return (
      <div>
        <Suspense
          fallback={<div>Loading...</div>}
        >
          <MaleComponent
            male_products={apiData}
          />
        </Suspense>
      </div>
    );
  } catch (err) {
    return <div>Error</div>;
  }
}
