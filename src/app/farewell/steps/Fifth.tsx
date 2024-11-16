import { createMemory } from "@/app/api/FarewellAPI";
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
	const navigate = useNavigate();

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
					message: farewell
				});

				if (response) {
					setLoading(false);
				}
			} catch (error) {
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

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			{
				hasError && <Alert onClickClose={handleClickMain}>
					<p>에러가 발생했습니다.<br />다시 시도 해 주세요.</p>
				</Alert>
			}
			<img src="/assets/cloud.webp" className="cloud" />
			<div className={
				`deleted-quota-info
                ${isLoading ? "fade-out" : "fade-in"}`
			}>
				<p className="deleted-quota-text">
					<em className="accent">{deletedFileCount}KB</em> 만큼 가벼워졌어요!
				</p>
				<p className="shade">
					1kb의 전력으로는 물 4방울,<br /> 열 10도의 에너지를 아낄 수 있어요.
				</p>
				<Button className="to-main" onClick={handleClickMain}>얼마나 아꼈는지 보러가기</Button>
			</div>
		</>
	);
};

export default Fifth;
