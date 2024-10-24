import React from "react";
import ReducedList from "./component/ReducedList";

const ReducedCarbon = () => {
	return <div className="deleted-wrapper column">
		<div className="deleted-title-label">
			<em>지운<br />탄소 양</em>
		</div>
		<div>
			70KG
			<div className="carbon-text">
				클라우드 저장소의 <br />
				1GB당 약 2KG의 탄소가 발생해요.
			</div>
		</div>
		<ReducedList />
	</div>;
};

export default ReducedCarbon;