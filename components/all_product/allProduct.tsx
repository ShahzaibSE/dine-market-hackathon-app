"use client";
import ProductCard from "../product/productCard";

export default function AllProductComponent(
  props: any
) {
  const { all_products } = props;
  //
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-12 xl:p-24">
      <>
        {all_products.map(
          (product: any, index: number) => (
            <ProductCard
              key={index}
              product={product}
            />
          )
        )}
      </>
    </div>
  );
}
