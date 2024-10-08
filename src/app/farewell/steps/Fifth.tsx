import { createMemory } from "@/app/api/FarewellAPI";
import Button from "@/components/Button";
import useFarewellStore from "@/state/FarewellStore";
import useLoadingStore from "@/state/LoadingStore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Fifth = () => {
	const { deletedFileCount, resetStore, file, nickName, selectedLocation, farewell } = useFarewellStore();
	const [isLoading, setLoading] = useState(true);
	const { showLoading, hideLoading } = useLoadingStore();
	const navigate = useNavigate();

	useEffect(() => {
		showLoading();

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
					hideLoading();
					setLoading(false);
				}
			} catch (error) {
				hideLoading();
				handleClickMain();
			}
		};

		saveMemory();

		return () => setLoading(true);
	}, [file]);

	const handleClickMain = () => {
		navigate("/");
		resetStore();
	};

	return (
		<>
			<img
				className="cloud"
				src="/assets/cloud.png"
			/>
			{isLoading && <p>떠나 보내는 중</p>}
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
				<Button className="to-main" onClick={handleClickMain}>메인으로</Button>
			</div>
		</>
	);
};

export default Fifth;
