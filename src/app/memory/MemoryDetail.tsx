import Pages from "@/routes";
import useLoadingStore from "@/state/LoadingStore";
import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMemory } from "../api/MemoryAPI";
import { Memory } from "../api/types/MemoryType";
import BackButton from "./components/BackButton";


const MemoryDetail: FC = () => {
	const { showLoading, hideLoading } = useLoadingStore();
	const { id } = useParams<{ id: string }>();
	const [itemDetail, setDetail] = useState<Memory>();

	useEffect(() => {
		if (!id) {
			return;
		}
		showLoading();

		const fetchMemory = async () => {
			const response = await getMemory(id);

			setDetail(response.data.result[0]);
			hideLoading();
		};

		fetchMemory();
	}, [id]);

	if (!itemDetail) {
		return null;
	}

	return <div className="detail-wrap column">
		<BackButton to={Pages.Memory} />
		<div className="detail-image-wrap">
			<img
				className={classNames("detail-image", itemDetail.location.toLowerCase())}
				src={itemDetail.image_url}
			/>
			<div className="detail-nickname">{itemDetail.nickname || "익명의 먼지"}</div>
			<p className="detail-content">
				{itemDetail.message}
			</p>
		</div>
	</div >;
};

export default MemoryDetail;