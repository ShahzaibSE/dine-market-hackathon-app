"use client";
import ProductCard from "./../product/productCard";

export default function MaleComponent(
  props: any
) {
  const { male_products } = props;
  console.log("Male Products");
  //
  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      {/* <div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Card>
            <CardContent>
              <div className="flex justify-center items-center">
                <Image
                  alt="female-brushed-reglan-sweatshirt"
                  src="/assets/female-clothes/female-brushed-raglan-sweatshirt.png"
                  width="300"
                  height="320"
                  className="max-w-full"
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col justify-between items-center gap-2">
                <h3 className="font-bold text-2xl md:3xl">
                  Brushed Reglan Sweatshirt
                </h3>
                <h3 className="font-bold text-2xl md:3xl">
                  $195
                </h3>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div> */}
    
        {male_products.map(
          (product: any, index: number) => (
            <ProductCard
              key={index}
              product={product}
            />
          )
        )}
      
    </div>
  );
}
