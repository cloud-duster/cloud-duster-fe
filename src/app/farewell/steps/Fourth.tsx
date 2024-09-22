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

	return <>
		<div className="left">사진을 보내 줄 장소를<br/> 선택 해 주세요.</div>
		<div 
			className="goodbye"
			style={{backgroundColor: "aliceblue"}}
			onClick={handleClick}
			data-value={FarewellLocation.SKY}
		>
            하늘
		</div>
		<div
			className="goodbye"
			style={{backgroundColor: "gray"}}
			onClick={handleClick}
			data-value={FarewellLocation.OCEAN}
		>
            바다
		</div>
		<div
			className="goodbye"
			style={{backgroundColor: "blueviolet"}}
			onClick={handleClick}
			data-value={FarewellLocation.MOUNTAIN}
		>
            산
		</div>
	</>;
};

export default Fourth;