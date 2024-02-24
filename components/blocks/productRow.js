"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/blocks/products";

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `${process.env.NEXT_PUBLIC_WP_REST}/wp-json/wc/v3/products/?consumer_key=${process.env.NEXT_PUBLIC_WOO_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOO_SECRET}&per_page=5`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Data could not be fetched!");
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
