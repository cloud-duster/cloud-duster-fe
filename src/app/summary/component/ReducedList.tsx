import React from "react";

const ReducedList = () => {
	return <div className="grid-container">
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/button.png" />
			</div>
			<div className="label">Label 1</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/judaeng.png" />
			</div>
			<div className="label">Label 2</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/clover.png" />
			</div>
			<div className="label">Label 3</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/narutomaki.png" />
			</div>
			<div className="label">Label 4</div>
		</div>
		<div className="grid-item-wrapper">
			<div className="grid-item">
				<img className="grid-image" src="/assets/tamagotchi.png" />
			</div>
			<div className="label">Label 5</div>
		</div>
	</div>;
};

export default ReducedList;