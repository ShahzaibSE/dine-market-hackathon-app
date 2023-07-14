import React from "react";
import KidComponent from "../../../components/kid_product/kid";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";

const getFemaleProducts = async function () {
  try {
    const res = await client.fetch(
      `*[_type == 'product' && gender == 'kid'] `
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export default async function KidPage() {
  const {data} =
  await (await fetch(`http://localhost:3000/api/product?gender=kid`)).json();
  return (
    <div>
      <KidComponent kid_products={data} />
    </div>
  );
}
