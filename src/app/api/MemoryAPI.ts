import axios from "axios";
import { URL_API } from "./config";
import { Memories, Memory } from "./types/MemoryType";

const getMemoryList = async () => {
    return await axios.get<Memories>(`${URL_API}/memories`);
}

const getMemory = async (id: string) => {
    return await axios.get<{ result: Array<Memory> }>(`${URL_API}/memories/${id}`);
}

export { getMemory, getMemoryList };

