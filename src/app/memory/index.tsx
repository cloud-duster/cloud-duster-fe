import React from "react";
import "../../css/memory.css";
import DateDropDown from "./components/DateDropDown";
import Gallery from "./Gallery";
import Timer from "./Timer";

const Memory = () => {
	return <div className="memory_root">
		<DateDropDown />
		<Timer />
		<Gallery />
	</div>;
};

export default Memory;