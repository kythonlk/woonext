"use client";

import React from "react";
import { useCartStore } from "./cart";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CartDisplay = () => {
  const { items, removeItem, updateItemQuantity, clearCart } = useCartStore();

  const handleQuantityChange = (event, id) => {
    const newQuantity = Math.max(1, parseInt(event.target.value, 10));
    updateItemQuantity(id, newQuantity);
  };

  const calculateTotalPrice = () => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  console.log(items.map((item) => item.price));
  return (
    <div className="p-4 md:p-8 md:my-20 max-w-6xl mx-auto bg-white rounded-lg shadow min-h-80">
      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="mb-4">
                <div className="grid lg:grid-cols-2">
                  <div className="lg:flex gap-4">
                    <span className="font-medium">{item.name}</span>
                    <div className="font-medium px-2">LKR {item.price}</div>
                  </div>
                  <div className="lg:flex gap-4 justify-end">
                    <input
                      type="number"
                      className="border p-1 w-16 text-center"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(e, item.id)}
                      min="1"
                    />
                    <Button
                      className="bg-red-500"
                      onClick={() => removeItem(item.id)}
                      size="sm"
                    >
                      Remove
                    </Button>
                    <div className="font-bold px-2 w-60 text-right">
                      Total: LKR {item.price * item.quantity}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right font-semibold">
            Total: LKR {calculateTotalPrice()}
          </div>
          <div className="mt-12 flex justify-between">
            <Button className=" transition-colors" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button className="bg-blue-900 transition-colors">
              <a href="/checkout">Checkout</a>
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="h-52">
            <p className="font-bold my-auto">Your cart is empty.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDisplay;
