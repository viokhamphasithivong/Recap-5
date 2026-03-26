import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useArtStore = create(
  persist(
    (set) => ({
      artpiecesData: [],
      setArtpiecesData: (data) => set({ artpiecesData: data }),
      toggleFavourite: (index) =>
        set((state) => ({
          artpiecesData: state.artpiecesData.map((art, i) =>
            i === index ? { ...art, isFavourite: !art.isFavourite } : art
          ),
        })),
    }),
    {
      name: "artpieces-storage", // key in localStorage
    }
  )
);
