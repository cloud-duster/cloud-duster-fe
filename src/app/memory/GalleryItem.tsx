import Pages from "@/routes";
import classNames from "classnames";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Memory } from "../api/types/MemoryType";

interface Props {
	item: Memory;
}

const GalleryItem: FC<Props> = ({ item }) => {
	const { image_url, id, location } = item;
	const navigate = useNavigate();

	const handleClickItem = () => {
		navigate(`${Pages.MemoryDetail}/${id}`);
	};

	return <div className={classNames("gallery-item", location.toLowerCase())} onClick={handleClickItem}>
		<img src={image_url} loading="lazy" />
	</div>;
};

export default GalleryItem;