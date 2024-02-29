"use client";

import React, { useState } from "react";
import { useCartStore } from "./cart";
import { Button } from "@/components/ui/button";

const AddToCartButton = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: parseInt(quantity, 10) });
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        style={{ width: "60px" }}
      />
      <Button size="lg" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
