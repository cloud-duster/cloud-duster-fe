import axios from "axios";
import FarewellLocation from "../farewell/types/FarewellLocation";
import { URL_API } from "./config";

interface MemoryParams {
    nickname?: string;
    image: File;
    location: FarewellLocation;
    message: string;
}

const createMemory = async (params: MemoryParams) => {
    const formData = new FormData();
    const { nickname, image, location, message } = params;

    formData.append('nickname', nickname || '익명의 먼지');
    formData.append('image', image);
    formData.append('message', message);
    formData.append('location', location);
    formData.append('size', image.size.toString());

    return await axios.post(`${URL_API}/memory`, formData);
}

export { createMemory };
