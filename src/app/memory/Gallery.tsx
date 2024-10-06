import useLoadingStore from "@/state/LoadingStore";
import React, { useEffect, useRef, useState } from "react";
import { getMemoryList } from "../api/MemoryAPI";
import { Memory } from "../api/types/MemoryType";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
	// const [cursor, setCursor] = useState();
	const [isLoading] = useState(true);
	const { showLoading, hideLoading } = useLoadingStore();
	const [list, setList] = useState<Array<Memory>>([]);
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isLoading) {
			showLoading();
		} else {
			hideLoading();
		}
	}, [isLoading]);

	// useEffect(() => {
	// 	const target = bottomRef.current;

	// 	if (!target) {
	// 		return;
	// 	}

	// 	const observer = new IntersectionObserver((entries) => {
	// 		if (entries[0].isIntersecting) {
	// 			async function fetchMorePosts() {
	// 				setLoading(true);
	// 				const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	// 				const data = await res.json();
	// 				setList((prevPosts) => [...prevPosts, ...data]);
	// 				setLoading(false);
	// 			}
	// 			fetchMorePosts();
	// 		}
	// 	});

	// 	observer.observe(target);

	// 	() => observer.unobserve(target);
	// }, []);

	useEffect(() => {
		const fetchList = async () => {
			const response = await getMemoryList();

			setList(response.data.items);
		};

		fetchList();
	}, []);

	return <div className="gallery">
		{list.map((item: Memory) => {
			return <GalleryItem item={item} key={item.id} />;
		})}
		<div className="gallery-cursor" ref={bottomRef} />
	</div>;
};

export default Gallery;