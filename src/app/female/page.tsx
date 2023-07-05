import React from 'react';
import FemaleComponent from '../../../components/female_product/female';
import Header from '../../../components/header';
import Footer from '../../../components/footer';

export default async function FemalePage() {
  const femaleProducts = await fetch("http:localhost:3000/product");
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
      <Footer/>
    </footer>
  </div>
  )
}
