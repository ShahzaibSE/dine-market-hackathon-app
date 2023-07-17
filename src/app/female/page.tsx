import React from "react";
import FemaleComponent from "../../../components/female_product/female";
import { client } from "../../../sanity/lib/client";

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
  const {data} =
    await (await fetch(`http://localhost:3000/api/product?gender=female`)).json();
  return (
    <div>
      <FemaleComponent
        female_products={data}
      />
    </div>
  );
}
