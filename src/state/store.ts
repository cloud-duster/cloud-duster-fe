import { create } from "zustand";

interface FarewellState {
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
}

const useFarewellStore = create<FarewellState>()((set) => ({
	currentPage: 0,
	nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
	previousPage: () => set((state) => ({ currentPage: Math.max(0, state.currentPage - 1) })),
}));

export default useFarewellStore;