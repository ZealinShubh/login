import { create } from "zustand";

const useBearStore = create((set) => ({
  isUserValid: false,
  setIsUserValid: (arg) => set({ isUserValid: arg }),
}));

export default useBearStore;
