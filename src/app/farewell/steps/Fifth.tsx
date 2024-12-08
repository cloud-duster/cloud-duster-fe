import { createMemory } from "@/app/api/FarewellAPI";
import { getFixedLocaleString, getMBQuota } from "@/app/utils/quota";
import Button from "@/components/Button";
import "@/css/animation.css";
import Pages from "@/routes";
import useFarewellStore from "@/state/FarewellStore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Alert from "./components/Alert";

const Fifth = () => {
	const { deletedFileCount, resetStore, file, nickName, selectedLocation, farewell } = useFarewellStore();
	const [isLoading, setLoading] = useState(true);
	const [hasError, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	const fileSize = file?.size || 1;
	const deletedQuota = deletedFileCount * fileSize;
	const deletedQuotaInMB = getMBQuota(deletedQuota);
	const deletedQuotaInGB = deletedQuotaInMB / 1024;

	useEffect(() => {
		const saveMemory = async () => {
			if (!file) {
				return;
			}

			try {
				const response = await createMemory({
					image: file,
					nickname: nickName,
					location: selectedLocation,
					message: farewell,
					amount: deletedFileCount
				});

				if (response) {
					setLoading(false);
				}
			} catch (error) {
				if (error === "413") {
					setErrorMessage("사진 용량이 너무 커요. 캡쳐 된 사진으로 다시 시도 해 주세요.");
				}

				setLoading(false);
				setError(true);
			}
		};

		saveMemory();
	}, [file]);

	const handleClickMain = () => {
		navigate(Pages.Main);
		resetStore();
	};

	const handleClickToSummary = () => {
		navigate(Pages.Summary);
		resetStore();
	};


	if (isLoading) {
		return <Loading />;
	}

	if (hasError) {
		return <Alert onClickClose={handleClickMain}>
			{
				errorMessage
					? <p>{errorMessage}</p>
					: <p>에러가 발생했습니다.<br />다시 시도 해 주세요.</p>
			}
		</Alert>;
	}

	return (
		<>
			<div>
				<img src="assets/cloud.webp" className="cloud" />
				<div className="confetti" /><div className="confetti" /><div className="confetti" />
				<div className="confetti" /><div className="confetti" /><div className="confetti" />
				<div className="confetti" />
			</div>
			<div className={
				`deleted-quota-info
                ${isLoading ? "fade-out" : "fade-in"}`
			}>
				<p className="deleted-quota-text">
					<em className="accent">약 {getFixedLocaleString(deletedQuotaInMB, 1)}MB</em> 만큼 가벼워졌어요!
				</p>
				<p className="shade">
					클라우드에서 {getFixedLocaleString(deletedQuotaInMB)}MB을 지우면
					물 {getFixedLocaleString(deletedQuotaInGB * 1000)}L,<br />
					종이 {getFixedLocaleString(deletedQuotaInGB * 80)}장을 아낄 수 있어요.
				</p>
				<Button className="to-main" onClick={handleClickToSummary}>얼마나 아꼈는지 보러가기</Button>
			</div>
		</>
	);
};

export default Fifth;
