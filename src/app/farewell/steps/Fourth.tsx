import useFarewellStore from "@/state/FarewellStore";
import React from "react";
import FarewellLocation from "../types/FarewellLocation";

const Fourth = () => {
	const { setSelectedLocation, nextPage } = useFarewellStore();
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const value = event.currentTarget.dataset.value as FarewellLocation;

		setSelectedLocation(value);
		nextPage();
	};

	return <div className="location-root">
		<div className="location-wrapper column">
			<div className="location-wrapper-label">사진을 보내 줄 장소를<br /> 선택 해 주세요.</div>
			<div
				className="location-div"
				onClick={handleClick}
				data-value={FarewellLocation.SKY}
			>
				<img className="location-image" src="/assets/sky.png" />
				<p className="location-text neon-text">하늘</p>
			</div>
			<div
				className="location-div"
				onClick={handleClick}
				data-value={FarewellLocation.OCEAN}
			>
				<img className="location-image" src="/assets/sky.png" />
				<p className="location-text neon-text">바다</p>
			</div>
			<div
				className="location-div"
				onClick={handleClick}
				data-value={FarewellLocation.MOUNTAIN}
			>
				<img className="location-image" src="/assets/mountain.png" />
				<p className="location-text neon-text">산</p>
			</div>
		</div>
	</div>;
};

export default Fourth;