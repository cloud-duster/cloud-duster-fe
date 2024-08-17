import { create } from "zustand";

interface FarewellState {
  deletedFileCount: number;
  currentPage: number;
  file: null | File;
  nextPage: () => void;
  previousPage: () => void;
  saveFile: (file: File) => void;
}

const useFarewellStore = create<FarewellState>()((set) => ({
	deletedFileCount: 0,
	currentPage: 0,
	file: null,
	nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
	previousPage: () => set((state) => ({ currentPage: Math.max(0, state.currentPage - 1) })),
	saveFile: (file) => set(() => ({ file })),
}));

export default useFarewellStore;