import React from "react";
import ReducedList from "./component/ReducedList";

const ReducedCarbon = () => {
	return <div className="deleted-wrapper column">
		<div className="gradient"></div>
		<div className="deleted-title-label">
			<em>지운<br />탄소 양</em>
		</div>
		<div className="deleted-quota-wrapper">
			<img src="assets/carbon-logo.svg" className="deleted-quota-image" />
			<p className="deleted-quota">70KG</p>
		</div>
		<div className="carbon-text">
			클라우드 저장소의 <br />
			1GB당 약 2KG의 탄소가 발생해요.
		</div>
		<ReducedList />

		<div className="carbon-text-last">만큼 아꼈어요! ☁️</div>
	</div>;
};

export default ReducedCarbon;