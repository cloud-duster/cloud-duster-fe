import useFarewellStore from "@/state/FarewellStore";
import React from "react";
import FarewellLocation from "../types/FarewellLocation";

const Loading = () => {
	const { selectedLocation, file } = useFarewellStore();

	if (!file) {
		return;
	}

	if (selectedLocation === FarewellLocation.OCEAN) {
		return <div className="ocean">
			<div className="bubble bubble--1"></div>
			<div className="bubble bubble--2"></div>
			<div className="bubble bubble--3"></div>
			<div className="bubble bubble--4"></div>
			<div className="bubble bubble--5"></div>
			<div className="bubble bubble--6"></div>
			<div className="bubble bubble--7"></div>
			<div className="bubble bubble--8"></div>
			<div className="bubble bubble--9"></div>
			<div className="bubble bubble--10"></div>
			<div className="bubble bubble--11"></div>
			<div className="bubble bubble--12"></div>
			<div className="animation-image-wrapper">
				<p className="accent neon-text">떠나 보내는 중...</p>
				<img className="drowning-image" src={URL.createObjectURL(file)} />
			</div>
		</div>;
	} else {
		return <div>test</div>;
	}
};

export default Loading;