import { Memory } from "@/app/api/types/MemoryType";
import { DateType, MemoryDateType } from "@/app/memory/constant/MemoryDate";
import dayjs from "dayjs";
import { create } from "zustand";

interface MemoryState {
	memoryList: Array<Memory>;
	setMemoryList: (list: Memory[]) => void;
	appendMemoryList: (list: Memory[]) => void;
	selectedDate: MemoryDateType;
	setSelectedDate: (date: MemoryDateType) => void;
}

const initialState = {
	memoryList: [],
	selectedDate: {
		date: DateType.All,
		value: dayjs().valueOf().toString(),
	},
};

const useMemoryStore = create<MemoryState>()((set) => ({
	...initialState,
	setMemoryList: (list) => set(() => ({ memoryList: list })),
	appendMemoryList: (list) => set((state) => ({
		memoryList: [...state.memoryList, ...list]
	})),
	setSelectedDate: (date) => set(() => ({ selectedDate: date })),
}));

export default useMemoryStore;