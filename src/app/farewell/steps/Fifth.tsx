import useFarewellStore from "@/state/store";
import React, { useEffect, useState } from "react";

const Fifth = () => {
	const { deletedFileCount } = useFarewellStore();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		// TODO: API 연동
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			<img
				className="cloud"
				src="src/assets/cloud.png"
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
                    1kb의 전력으로는 물 4방울,<br/> 열 10도의 에너지를 아낄 수 있어요.
				</p>
			</div>
		</>
	);
};

export default Fifth;
