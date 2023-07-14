import React from "react";
import MaleComponent from "../../../components/male_product/male";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";

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
  const {data} =
  await (await fetch(`http://localhost:3000/api/product?gender=male`)).json();
  return (
    <div>
      <MaleComponent
        male_products={data}
      />
    </div>
  );
}
