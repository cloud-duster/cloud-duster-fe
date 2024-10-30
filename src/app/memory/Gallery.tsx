import useLoadingStore from "@/state/LoadingStore";
import useMemoryStore from "@/state/MemoryStore";
import React, { useEffect, useRef, useState } from "react";
import { getMemoryList } from "../api/MemoryAPI";
import { Memory } from "../api/types/MemoryType";
import EmptyGallery from "./EmptyGallery";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
	const [cursor, setCursor] = useState<null | number>(null);
	const [isLoading, setLoading] = useState(true);
	const { showLoading, hideLoading } = useLoadingStore();
	const { selectedDate, appendMemoryList, memoryList, setMemoryList } = useMemoryStore();
	const bottomRef = useRef<HTMLDivElement>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (isLoading) {
			showLoading();
		} else {
			hideLoading();
		}
	}, [isLoading]);

	const fetchMore = async (newCursor: number | null) => {
		setLoading(true);
		const response = await getMemoryList(newCursor, selectedDate.date);
		const { items, nextCursor } = await response.data;

		if (nextCursor) {
			setCursor(nextCursor.id);
		} else {
			observerRef.current?.disconnect();
		}

		appendMemoryList(items);
		setLoading(false);
	};

	useEffect(() => {
		setMemoryList([]);
		setCursor(null);
		fetchMore(null);
	}, [selectedDate.date]);

	useEffect(() => {
		const target = bottomRef.current;

		if (!target) {
			return;
		}

		observerRef.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && cursor) {
				fetchMore(cursor);
			}
		});

		observerRef.current.observe(target);

		return () => {
			observerRef.current?.disconnect();
		};
	}, [cursor]);

	if (!memoryList.length && !isLoading) {
		return <EmptyGallery />;
	} else {
		return <div className="gallery">
			{memoryList.map((item: Memory) => {
				return <GalleryItem item={item} key={item.id} />;
			})}
			<div className="gallery-cursor" ref={bottomRef} />
		</div>;
	}
};

export default Gallery;