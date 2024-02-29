"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/blocks/products";
import SkeletonProduct from "@/components/blocks/productSkeleton";

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const url = `${process.env.NEXT_PUBLIC_WP_REST}/products/?consumer_key=${process.env.NEXT_PUBLIC_WOO_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOO_SECRET}&per_page=10`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Data could not be fetched!");
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4 p-2 md:p-4 md:my-4">
      {isLoading
        ? Array.from({ length: 10 }).map((_, index) => (
            <SkeletonProduct key={index} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
}
