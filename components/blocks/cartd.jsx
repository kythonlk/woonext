"use client";

// import React from "react";
// import { useCartStore } from "./cart";
//
// const CartDisplay = () => {
//   const { items, removeItem, updateItemQuantity, clearCart } = useCartStore();
//
//   const handleQuantityChange = (event, id) => {
//     const newQuantity = parseInt(event.target.value, 10);
//     updateItemQuantity(id, newQuantity);
//   };
//
//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
//       {items.length > 0 ? (
//         <ul>
//           {items.map((item) => (
//             <li key={item.id} className="mb-4">
//               <div className="flex justify-between items-center">
//                 <span className="font-medium">{item.name}</span>
//                 <span>LKR {item.price}</span>
//               </div>
//               <div className="flex gap-2 mt-2">
//                 <input
//                   type="number"
//                   className="border p-1 w-16 text-center"
//                   value={item.quantity}
//                   onChange={(e) => handleQuantityChange(e, item.id)}
//                   min="1"
//                 />
//                 <button
//                   className="bg-red-500 text-white p-1 rounded"
//                   onClick={() => removeItem(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//       {items.length > 0 && (
//         <div className="mt-4">
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
//             onClick={clearCart}
//           >
//             Clear Cart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default CartDisplay;

import React from "react";
import { useCartStore } from "./cart";

const CartDisplay = () => {
  const { items, removeItem, updateItemQuantity, clearCart } = useCartStore();

  const handleQuantityChange = (event, id) => {
    const newQuantity = Math.max(1, parseInt(event.target.value, 10)); // Ensure quantity cannot go below 1
    updateItemQuantity(id, newQuantity);
  };

  const calculateTotalPrice = () => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.name}</span>
                  <span>LKR {item.price}</span>
                </div>
                <div className="flex gap-2 mt-2 items-center">
                  <input
                    type="number"
                    className="border p-1 w-16 text-center"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    min="1"
                  />
                  <button
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-700 transition-colors"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right font-semibold">
            Total: LKR {calculateTotalPrice()}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartDisplay;
