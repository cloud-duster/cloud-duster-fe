import axios from "axios";
import FarewellLocation from "../farewell/types/FarewellLocation";
import { URL_API } from "./config";

interface MemoryParams {
    nickname?: string;
    image: File;
    location: FarewellLocation;
}

const createMemory = async (params: MemoryParams) => {
    const formData = new FormData();
    const { nickname, image, location } = params;

    formData.append('nickname', nickname || '익명의 먼지');
    formData.append('image', image);
    formData.append('location', location);
    formData.append('size', image.size.toString());

    return await axios.post(`${URL_API}/memory`, {
        body: formData
    });
}

export { createMemory };
