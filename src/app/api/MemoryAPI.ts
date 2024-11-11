import axios from "axios";
import { DateType } from "../memory/constant/MemoryDate";
import { URL_API } from "./config";
import { Memories, Memory } from "./types/MemoryType";

const getMemoryList = async (cursorId: number | null, date: DateType) => {
	const url = cursorId ? `${URL_API}/memories?cursorId=${cursorId}&date=${date}` : `${URL_API}/memories?date=${date}`;

	return await axios.get<Memories>(url);
};

const getMemory = async (id: string) => {
	return await axios.get<{ result: Array<Memory> }>(`${URL_API}/memories/${id}`);
};

export { getMemory, getMemoryList };

