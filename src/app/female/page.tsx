import React, { Suspense } from "react";
import FemaleComponent from "../../../components/female_product/female";
import { client } from "../../../sanity/lib/client";
import { BASE_PATH } from "../../../sanity/lib/base";
import { Product } from "@/type";

const getFemaleProducts = async function () {
  try {
    const res = await client.fetch(
      `*[_type == 'product' && gender == 'female'] `
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export default async function FemalePage() {
  try {
    const path = `${BASE_PATH}api/product?gender=female`;
    const { data } = await (
      await fetch(path)
    ).json();
    // const data = await getFemaleProducts();
    const apiData: Array<Product> =
      data.length > 0 ? data : [];

    console.log("API Path", path);
    return (
      <div>
        <Suspense
          fallback={<div>Loading...</div>}
        >
          <FemaleComponent
            female_products={apiData}
          />
        </Suspense>
      </div>
    );
  } catch (err) {
    return <div>Error</div>;
  }
}
