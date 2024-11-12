import React from "react";

const ReducedList = () => {
	return <div className="grid-container">
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/car.webp" className="grid-image" />
			</div>
			<div className="label">휘발유<br />자동차 <em className="accent">80</em>km</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/smartphone.webp" className="grid-image" />
			</div>
			<div className="label">스마트폰 <br /><em className="accent">30</em>번 충전</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/computer.webp" className="grid-image" />
			</div>
			<div className="label">노트북 <br /><em className="accent">30</em>번 충전</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/pet.webp" className="grid-image" />
			</div>
			<div className="label">플라스틱<br />페트병 <em className="accent">20</em>개</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/paper.webp" className="grid-image" />
			</div>
			<div className="label">A4용지<br /> <em className="accent">20</em>장</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/water.webp" className="grid-image" />
			</div>
			<div className="label">물<br /><em className="accent">1000</em>L</div>
		</div>
	</div>;
};

export default ReducedList;