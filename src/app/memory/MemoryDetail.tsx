import Pages from "@/routes";
import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMemory } from "../api/MemoryAPI";
import { Memory } from "../api/types/MemoryType";
import BackButton from "./components/BackButton";


const MemoryDetail: FC = () => {
	const { id } = useParams<{ id: string }>();
	const [itemDetail, setDetail] = useState<Memory>();

	useEffect(() => {
		if (!id) {
			return;
		}

		const fetchMemory = async () => {
			const response = await getMemory(id);

			setDetail(response.data.result[0]);
		}

		fetchMemory();
	}, [id])

	if (!itemDetail) {
		return <div>error!</div>
	}

	return <>
		<BackButton to={Pages.Memory} />
		<div className="detail-wrap">
			<div className="detail-image-wrap">
				<img
					className={classNames("detail-image", itemDetail.location.toLowerCase())}
					src={itemDetail.image_url}
				/>
				<div className="detail-nickname">{itemDetail.nickname || "익명의 먼지"}</div>
			</div>
			<p className="detail-content">
				{itemDetail.message}
			</p>
		</div >
	</>;
};

export default MemoryDetail;