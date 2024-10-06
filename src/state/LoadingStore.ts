import { create } from "zustand";

interface LoadingState {
    visible: boolean;
    showLoading: () => void;
    hideLoading: () => void;
}

const initialState = {
	visible: false,
};

const useLoadingStore = create<LoadingState>()((set) => ({
	...initialState,
	showLoading: () => set(() => ({ visible: true })),
	hideLoading: () => set(() => ({ visible: false })),
}));

export default useLoadingStore;