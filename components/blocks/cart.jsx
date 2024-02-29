import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],

      addItem: (itemToAdd) =>
        set((state) => {
          const existItemIndex = state.items.findIndex(
            (item) => item.id === itemToAdd.id,
          );
          if (existItemIndex !== -1) {
            const newQuantity = state.items[existItemIndex].quantity + 1;
            let newItems = [...state.items];
            newItems[existItemIndex] = {
              ...newItems[existItemIndex],
              quantity: newQuantity,
            };
            return { items: newItems };
          } else {
            return { items: [...state.items, { ...itemToAdd, quantity: 1 }] };
          }
        }),

      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),

      updateItemQuantity: (itemId, quantity) =>
        set((state) => {
          const sanitizedQuantity = Math.max(1, quantity);
          return {
            items: state.items.map((item) =>
              item.id === itemId
                ? { ...item, quantity: sanitizedQuantity }
                : item,
            ),
          };
        }),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    },
  ),
);
