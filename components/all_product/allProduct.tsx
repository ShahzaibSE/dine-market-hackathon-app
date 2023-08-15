"use client";
import ProductCard from "../product/productCard";

export default function AllProductComponent(
  props: any
) {
  const { all_products } = props;
  //
  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
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
