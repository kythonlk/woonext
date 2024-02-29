"use client";

import React from "react";
import { useCartStore } from "@/components/blocks/cart";
import Link from "next/link";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

const Checkout = () => {
  const { items, clearCart } = useCartStore();

  const calculateTotalPrice = () => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <Header />
      <div className="p-4 md:p-8 md:my-20 max-w-6xl mx-auto bg-white rounded-lg shadow min-h-80">
        <h1 className="text-xl font-bold mb-4">Checkout</h1>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <li key={item.id} className="mb-2">
                  {item.name} - {item.quantity} x LKR {item.price}
                </li>
              ))}
            </ul>
            <div className="font-semibold">
              Total: LKR {calculateTotalPrice()}
            </div>
            <div className="mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors ml-4">
                Confirm Order
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="mt-4">
          <Link href="/">
            <span className="text-blue-500">Back to shopping</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
