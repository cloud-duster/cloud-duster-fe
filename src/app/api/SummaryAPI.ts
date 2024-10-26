import axios from "axios";
import { URL_API } from "./config";

export interface SummaryData {
    deletedPhotoCount: number,
    peopleCount: number,
    avgPhotoSize: number
}

const getSummary = async () => {
	return await axios.get<SummaryData>(`${URL_API}/cloud-cleanup-summary`);
};

export { getSummary };

