import React from "react";
import KidComponent from "../../../components/kid_product/kid";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";

export const getFemaleProducts =
  async function () {
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
  const kidProducts = await getFemaleProducts();
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex flex-wrap p-12 md:p-24">
        <KidComponent kid_products={kidProducts}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
