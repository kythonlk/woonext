"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/blocks/products";
import SkeletonProduct from "@/components/blocks/productSkeleton";
import { useSearchParams } from "next/navigation";
import Sort from "@/components/blocks/sort";

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    const fetchAndSortProducts = async () => {
      setIsLoading(true);
      const searchTerm = searchParams.get("search") || "";
      let url = `${process.env.NEXT_PUBLIC_WP_REST}/products/?consumer_key=${process.env.NEXT_PUBLIC_WOO_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOO_SECRET}&per_page=30&search=${encodeURIComponent(searchTerm)}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Data could not be fetched!");
        let fetchedProducts = await response.json();

        switch (sort) {
          case "Newest":
            fetchedProducts.sort(
              (a, b) => new Date(b.date_created) - new Date(a.date_created),
            );
            break;
          case "low":
            fetchedProducts.sort((a, b) => a.price - b.price);
            break;
          case "high":
            fetchedProducts.sort((a, b) => b.price - a.price);
            break;
        }

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSortProducts();
  }, [searchParams, sort]);

  return (
    <div className="flex flex-col w-full">
      <Sort setSort={setSort} />
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 md:p-4 md:my-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonProduct key={index} />
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 md:p-4 md:my-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-center p-8">
            No products found with that search term.
          </p>
        </div>
      )}
    </div>
  );
}
