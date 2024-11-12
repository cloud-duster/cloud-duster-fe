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
				<p className="accent neon-text farewell-text">떠나 보내는 중...</p>
				<img className="drowning-image" src={URL.createObjectURL(file)} />
			</div>
		</div>;
	} else if (selectedLocation === FarewellLocation.MOUNTAIN) {
		return <div className="flame-background column">
			<p className="flame-text farewell-text">떠나 보내는 중...</p>
			<div className="flame-wrapper">
				<img className="flame-image" src={URL.createObjectURL(file)} />
				<div className="flame" />
			</div>
		</div>;
	} else if (selectedLocation === FarewellLocation.SKY) {
		return <div className="animation-image-wrapper">
			<img src="/assets/farewell-sky.webp" className="fly-background" />
			<p className="farewell-text neon-text sky-text">떠나 보내는 중...</p>
			<div className="fly-wrapper">
				<img className="wing left" src="/assets/wing.svg" />
				<img className="fly-image" src={URL.createObjectURL(file)} />
				<img className="wing right" src="/assets/wing.svg" />
			</div>
		</div>;
	}
};

export default Loading;