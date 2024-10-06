import useLoadingStore from "@/state/LoadingStore";
import React, { useEffect, useRef, useState } from "react";
import { getMemoryList } from "../api/MemoryAPI";
import { Memory } from "../api/types/MemoryType";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
	const [cursor, setCursor] = useState<null | number>(null);
	const [isLoading, setLoading] = useState(true);
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

	useEffect(() => {
		const target = bottomRef.current;

		if (!target) {
			return;
		}

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				const fetchMorePosts = async () => {
					setLoading(true);
					const response = await getMemoryList(cursor);
					const { items, nextCursor } = await response.data;

					if (nextCursor) {
						setCursor(nextCursor.id);
					} else {
						// 더 이상 데이터 없는 경우
						observer.unobserve(target);
					}

					setList((prevPosts) => [...prevPosts, ...items]);
					setLoading(false);
				};
				fetchMorePosts();
			}
		});

		observer.observe(target);

		return () => {
			if (target) {
				observer.unobserve(target);
			}
		};
	}, [cursor]);


	return <div className="gallery">
		{list.map((item: Memory) => {
			return <GalleryItem item={item} key={item.id} />;
		})}
		<div className="gallery-cursor" ref={bottomRef} />
	</div>;
};

export default Gallery;