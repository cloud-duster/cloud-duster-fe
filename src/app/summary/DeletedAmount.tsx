import React, { FC } from "react";
import { SummaryData } from "../api/SummaryAPI";
import { getMBQuota } from "../utils/quota";

interface Props {
	summary: SummaryData;
}

const DeletedAmount: FC<Props> = ({ summary }) => {
	const { deletedPhotoCount, avgPhotoSize, peopleCount, totalPhotoSize } = summary;

	return <div className="deleted-wrapper column">
		<div className="gradient" />
		<em className="deleted-title-label">지운 먼지<br />알아보기</em>
		<div className="deleted-quota-wrapper">
			<img src="assets/cloud-logo.svg" className="deleted-quota-image" />
			<p className="deleted-quota">{getMBQuota(totalPhotoSize)}MB</p>
			<div className="deleted-quota-label">만큼 가벼워졌어요.</div>
		</div>

		<div className="oval-wrapper column">
			<div className="oval first">
				<p className="oval-text">
					<em className="accent-oval-text first">{deletedPhotoCount.toLocaleString()}</em>개의 사진이 지워졌어요.
				</p>
			</div>

			<div className="oval second">
				<p className="oval-text">
					<em className="accent-oval-text second">{peopleCount.toLocaleString()}</em>명의 클라우드가
					정리됐어요.
				</p>
			</div>

			<div className="oval third">
				<p className="oval-text">
					사진당 평균 용량은{" "}
					<em className="accent-oval-text third">{getMBQuota(avgPhotoSize)} MB</em>
					이에요.
				</p>
			</div>
		</div>
	</div>;
};

export default DeletedAmount;