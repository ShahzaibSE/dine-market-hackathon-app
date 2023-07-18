import React from "react";
import KidComponent from "../../../components/kid_product/kid";
import { client } from "../../../sanity/lib/client";
import { BASE_PATH } from "../../../sanity/lib/base";

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
  const res = await fetch(`${BASE_PATH}/api/product?gender=kid`);
  const data = await res.json();
  return (
    <div>
      <KidComponent kid_products={data} />
    </div>
  );
}
