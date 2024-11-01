import React from "react";

const ReducedList = () => {
	return <div className="grid-container">
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/car.png" />
			</div>
			<div className="label">휘발유<br />자동차 <em className="accent">80</em>km</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/smartphone.png" />
			</div>
			<div className="label">스마트폰 <br /><em className="accent">30</em>번 충전</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/computer.png" />
			</div>
			<div className="label">노트북 <br /><em className="accent">30</em>번 충전</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/pet.png" />
			</div>
			<div className="label">플라스틱<br />페트병 <em className="accent">20</em>개</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/paper.png" />
			</div>
			<div className="label">A4용지<br /> <em className="accent">20</em>장</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/water.png" />
			</div>
			<div className="label">물<br /><em className="accent">1000</em>L</div>
		</div>
	</div>;
};

export default ReducedList;