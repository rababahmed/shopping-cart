import create from "zustand";
import { configurePersist } from "zustand-persist";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { devtools } from "zustand/middleware";

const { persist, purge } = configurePersist({
  storage: localStorage, // use `AsyncStorage` in react native
  rootKey: "root", // optional, default value is `root`
});

export const [useStore, store] = create(
  devtools(
    persist(
      {
        key: "auth", // required, child key of storage
        allowlist: ["items"],
      },
      (set) => ({
        cart: [],
        addToCart: (id, title, price, url) =>
          set((state) => {
            const isPresent = state.cart.find((game) => game.id === id);

            if (!isPresent) {
              return {
                ...state,
                cart: [...state.cart, { id, title, price, url, count: 1 }],
              };
            }

            const updatedCart = state.cart.map((game) =>
              game.id === id ? { ...game, count: game.count + 1 } : game
            );

            return {
              ...state,
              cart: updatedCart,
            };
          }),
      })
    )
  )
);

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", store);
}
