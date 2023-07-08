import React from "react";
import MaleComponent from "../../../components/male_product/male";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";

const getMaleProducts =
  async function () {
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
  const maleProducts = await getMaleProducts();
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex flex-wrap p-12 md:p-24">
        <MaleComponent male_products={maleProducts}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
