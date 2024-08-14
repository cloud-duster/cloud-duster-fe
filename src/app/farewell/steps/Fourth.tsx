import React from "react";

const Fourth = () => {
	const handleClick = () => {
		// TODO: 누른 장소 저장
	};

	return <>
		<div className="left">사진을 보내 줄 장소를<br/> 선택 해 주세요.</div>
		<div 
			className="goodbye"
			style={{backgroundColor: "aliceblue"}}
			onClick={handleClick}
		>
            하늘
		</div>
		<div
			className="goodbye"
			style={{backgroundColor: "gray"}}
		>
            바다
		</div>
		<div
			className="goodbye"
			style={{backgroundColor: "blueviolet"}}
		>
            산
		</div>
	</>;
};

export default Fourth;