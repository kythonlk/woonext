"use client";

import { useCartStore } from "./cart";
import { Button } from "@/components/ui/button";

const AddToCartButton = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ ...product });
  };

  return (
    <Button
      size="sm"
      className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
