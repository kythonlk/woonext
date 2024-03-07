import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./cartbutton";

export default function ProductCard({ product }) {
  const { name, images, price, id, regular_price, slug } = product;

  if (!name || !price || !slug || !id || !regular_price) {
    return null;
  }
  const productData = {
    id: id,
    name: name,
    price: price,
    quantity: 1,
  };

  return (
    <Card
      key={product.id}
      className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto lg:max-h-[500px] hover:shadow-xl transition-all duration-200"
    >
      <Link href={`/product/${slug}`} passHref>
        <div className="min-w-[220px] lg:min-w-[250px] 2xl:min-w-[300px] max-h-[200px] lg:max-h-[250px] 2xl:max-h-[350px] ">
          {images.length > 0 && (
            <Image
              src={images[0].src}
              alt={name}
              width={300}
              height={300}
              layout="responsive"
              className="min-w-full max-h-[250px] lg:max-h-[250px] 2xl:max-h-[300px] object-cover"
            />
          )}
          {(!images || images.length === 0) && (
            <Image
              src="https://dev.zamaro.ae/wp-content/uploads/woocommerce-placeholder.png"
              alt={name}
              width={320}
              height={320}
              layout="responsive"
              className="min-w-full max-h-[250px] lg:max-h-[250px] 2xl:max-h-[300px] object-cover"
            />
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <h2 className="text-lg font-bold hover:text-gray-700 transition-all duration-200">
          {name}
        </h2>
        <div className="mt-4 text-base font-semibold">
          LKR : {price}{" "}
          <span className="line-through text-gray-600 ml-2">
            {regular_price}
          </span>
        </div>
        <div className="flex mt-4 space-x-2">
          <AddToCartButton product={productData} />
          <Button
            className="w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
            size="sm"
            variant="outline"
          >
            <Link href={`/product/${slug}`}>More Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
