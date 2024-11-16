import { getFixedValue } from "@/app/utils/quota";
import React, { FC } from "react";

interface Props {
	reducedCarbon: number;
}

const FIXED = 1;

const ReducedList: FC<Props> = ({ reducedCarbon }) => {

	return <div className="grid-container">
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/car.webp" className="grid-image" />
			</div>
			<div className="label">자동차 <br /><em className="accent">{getFixedValue(80 * reducedCarbon, FIXED)}</em>km</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/smartphone.webp" className="grid-image" />
			</div>
			<div className="label">스마트폰 <br /><em className="accent">{getFixedValue(250 * reducedCarbon, FIXED)}</em>번 충전</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/computer.webp" className="grid-image" />
			</div>
			<div className="label">노트북 <br /><em className="accent">{getFixedValue(30 * reducedCarbon, FIXED)}</em>시간</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/pet.webp" className="grid-image" />
			</div>
			<div className="label">플라스틱<br />페트병 <em className="accent">{getFixedValue(15 * reducedCarbon, FIXED)}</em>개</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/paper.webp" className="grid-image" />
			</div>
			<div className="label">A4용지<br /> <em className="accent">{getFixedValue(80 * reducedCarbon, FIXED)}</em>장</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img src="/assets/water.webp" className="grid-image" />
			</div>
			<div className="label">물<br /><em className="accent">{getFixedValue(1000 * reducedCarbon, FIXED)}</em>L</div>
		</div>
	</div>;
};

export default ReducedList;