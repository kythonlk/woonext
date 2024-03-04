"use client";

import ProductRow from "@/components/blocks/productsall";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";
import Sidebard from "@/components/blocks/productsside";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-[280px_1fr] items-start">
        <div className="hidden md:flex flex-col gap-4 items-start py-2 mt-20">
          <Sidebard />
        </div>
        <div className="flex flex-col gap-4 items-start py-2">
          <ProductRow />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
