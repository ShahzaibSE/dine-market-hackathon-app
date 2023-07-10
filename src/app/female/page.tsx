import React from "react";
import FemaleComponent from "../../../components/female_product/female";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
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
  const femaleProducts =
    await getFemaleProducts();
  return (
    <div>
      <FemaleComponent
        female_products={femaleProducts}
      />
    </div>
  );
}
