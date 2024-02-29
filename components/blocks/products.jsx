import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { name, description, images, price, id } = product;
  return (
    <Card
      key={product.id}
      className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
    >
      <Image src={images[0].src} alt={name} width={320} height={320} />
      <CardContent className="p-4">
        <h2 className="text-lg font-bold hover:text-gray-700 transition-all duration-200">
          {name}
        </h2>
        <div className="mt-4 text-base font-semibold">LKR : {price}</div>
        <div className="flex mt-4 space-x-2">
          <Button
            className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
            size="sm"
          >
            Add to Cart
          </Button>
          <Button
            className="w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
            size="sm"
            variant="outline"
          >
            <Link href={`/product/${id}`}>More Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
