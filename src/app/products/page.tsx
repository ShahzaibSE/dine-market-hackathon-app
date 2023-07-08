import React from "react";
import AllProductComponent from "../../../components/all_product/allProduct";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";

const getAllProducts =
  async function () {
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
  const allProducts = await getAllProducts();
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex flex-wrap p-12 md:p-24">
        <AllProductComponent all_products={allProducts}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
