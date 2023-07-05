import React from "react";
import FemaleComponent from "../../../components/female_product/female";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { client } from "../../../sanity/lib/client";

export const getFemaleProducts =
  async function () {
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
  const femaleProducts = await getFemaleProducts();
  console.log(femaleProducts);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex flex-wrap p-12 md:p-24">
        <FemaleComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
