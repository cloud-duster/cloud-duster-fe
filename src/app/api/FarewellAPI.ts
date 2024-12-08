import axios, { AxiosError } from "axios";
import FarewellLocation from "../farewell/types/FarewellLocation";
import { URL_API } from "./config";

interface MemoryParams {
	nickname?: string;
	image: File;
	location: FarewellLocation;
	message: string;
	amount: number;
}

const convertToWebP = async (file: File, quality: number = 0.8): Promise<File> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = async () => {
			const img = new Image();
			img.onload = async () => {
				const canvas = document.createElement("canvas");
				canvas.width = img.width;
				canvas.height = img.height;

				const ctx = canvas.getContext("2d");
				if (!ctx) {
					reject(new Error("Canvas context not available"));
					return;
				}

				ctx.drawImage(img, 0, 0);

				canvas.toBlob(
					(blob) => {
						if (blob) {
							const webpFile = new File([blob], file.name.replace(/\.\w+$/, ".webp"), {
								type: "image/webp",
							});
							resolve(webpFile);
						} else {
							reject(new Error("Failed to convert image to WebP"));
						}
					},
					"image/webp",
					quality
				);
			};
			img.onerror = (err) => reject(err);
			img.src = reader.result as string;
		};
		reader.onerror = (err) => reject(err);
		reader.readAsDataURL(file);
	});
};

const createMemory = async (params: MemoryParams) => {
	try {
		const axiosInstance = axios.create({
			maxContentLength: Infinity,
			maxBodyLength: Infinity,
		});
		const formData = new FormData();
		const { nickname, image, location, message, amount } = params;
		const optimizedImage = await convertToWebP(image);

		formData.append("nickname", nickname || "익명의 먼지");
		formData.append("amount", amount.toString());
		formData.append("image", optimizedImage);
		formData.append("message", message);
		formData.append("location", location);
		formData.append("size", image.size.toString());

		return await axiosInstance.post(`${URL_API}/memory`, formData);
	} catch (e) {
		const error = e as AxiosError;
		if (error.code === "413") {
			throw error.code;
		} else {
			console.error("Post failed:", e);
			throw e;
		}
	}
};

export { createMemory };
