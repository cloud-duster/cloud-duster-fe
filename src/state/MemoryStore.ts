import { create } from "zustand";

interface MemoryState {
    selectedDate: string;
    setSelectedDate: (date: string) => void;
}

const initialState = {
	selectedDate: "",
};

const useMemoryStore = create<MemoryState>()((set) => ({
	...initialState,
	setSelectedDate: (date) => set(() => ({ selectedDate: date })),
}));

export default useMemoryStore;