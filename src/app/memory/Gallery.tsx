import React, { useEffect, useState } from "react";
import { getMemoryList } from "../api/MemoryAPI";
import { Memory } from "../api/types/MemoryType";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
	const [list, setList] = useState<Array<Memory>>([]);
	useEffect(() => {
		const fetchList = async () => {
			const response = await getMemoryList();

			setList(response.data.items);
		}

		fetchList();
	}, []);

	return <div className="gallery">
		{list.map((item: any) => {
			return <GalleryItem item={item} key={item.id} />
		})}
	</div>;
};

export default Gallery;