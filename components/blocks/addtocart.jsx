"use client";

import { useCartStore } from "./cart";
import { Button } from "@/components/ui/button";

const AddToCartButton = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Button size="lg" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
