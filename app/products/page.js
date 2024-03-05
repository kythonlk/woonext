"use client";

import { useState, useEffect, Suspense } from "react";
import ProductSet from "@/components/blocks/productset";
import SkeletonSet from "@/components/blocks/skeletenset";
import ProductNotFound from "@/components/blocks/productnotfound";
import { useSearchParams } from "next/navigation";
import Sort from "@/components/blocks/sort";
import Filter from "@/components/blocks/productsside";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";
import getProducts from "@/actions/getproducts";

export default function ProductsAll() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [priceFilter, setPriceFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  useEffect(() => {
    const fetchAndSortProducts = async () => {
      setIsLoading(true);
      const searchTerm = searchParams.get("search") || "";
      const page = 30;
      const products = await getProducts(searchTerm, page);

      try {
        let fetchedProducts = products;

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
        if (priceFilter.length > 0) {
          fetchedProducts = fetchedProducts.filter((product) => {
            const price = parseFloat(product.price);
            return priceFilter.some((filter) => {
              const [min, max] = filter.split("-").map(parseFloat);
              if (filter === "over-200") {
                return price > 200;
              }
              return price >= min && price <= max;
            });
          });
        }

        if (categoryFilter.length > 0) {
          fetchedProducts = fetchedProducts.filter((product) => {
            const categories = product.categories.map((cat) => cat.slug);
            return categoryFilter.some((filter) => categories.includes(filter));
          });
        }

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSortProducts();
  }, [searchParams, sort, priceFilter, categoryFilter]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="grid md:grid-cols-[280px_1fr] items-start">
        <div className="hidden md:flex flex-col gap-4 items-start py-2 mt-20">
          <Filter
            setPriceFilter={setPriceFilter}
            setCategoryFilter={setCategoryFilter}
          />
        </div>
        <div className="flex flex-col gap-4 items-start py-2">
          <div className="flex flex-col w-full">
            <Sort setSort={setSort} />
            {isLoading ? (
              <SkeletonSet />
            ) : products.length > 0 ? (
              <ProductSet products={products} />
            ) : (
              <ProductNotFound />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
}
