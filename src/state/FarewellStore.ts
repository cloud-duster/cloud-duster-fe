import FarewellLocation from "@/app/farewell/types/FarewellLocation";
import { create } from "zustand";
const MAX_PAGE = 4;

interface FarewellState {
	deletedFileCount: number;
	currentPage: number;
	file: null | File;
	isNextButtonDisabled: boolean;
	selectedLocation: FarewellLocation;
	nickName: string;
	farewell: string;
	nextPage: () => void;
	previousPage: () => void;
	saveFile: (file: File) => void;
	disableNextButton: () => void;
	enableNextButton: () => void;
	setSelectedLocation: (location: FarewellLocation) => void;
	setDeletedCount: (value: number) => void;
	setFarewell: (value: string) => void;
	resetStore: () => void;
	setNickName: (value: string) => void;
}

const initialState = {
	deletedFileCount: 0,
	currentPage: 0,
	file: null,
	farewell: "",
	nickName: "",
	selectedLocation: FarewellLocation.NONE,
	isNextButtonDisabled: false,
};

const useFarewellStore = create<FarewellState>()((set) => ({
	...initialState,
	setDeletedCount: (deletedFileCount) => set(() => ({ deletedFileCount })),
	setSelectedLocation: (selectedLocation) => set(() => ({ selectedLocation })),
	disableNextButton: () => set(() => ({ isNextButtonDisabled: true })),
	enableNextButton: () => set(() => ({ isNextButtonDisabled: false })),
	nextPage: () => set((state) => ({ currentPage: Math.min(state.currentPage + 1, MAX_PAGE) })),
	previousPage: () => set((state) => ({ currentPage: Math.max(0, state.currentPage - 1) })),
	saveFile: (file) => set(() => ({ file })),
	setFarewell: (farewell) => set(() => ({ farewell })),
	resetStore: () => set(initialState),
	setNickName: (nickName) => set(() => ({ nickName })),
}));

export default useFarewellStore;