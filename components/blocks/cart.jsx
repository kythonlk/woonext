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
            const updatedItems = state.items.map((item, index) => {
              if (index === existItemIndex) {
                return {
                  ...item,
                  quantity: item.quantity + itemToAdd.quantity,
                };
              }
              return item;
            });
            return { items: updatedItems };
          } else {
            return { items: [...state.items, itemToAdd] };
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
